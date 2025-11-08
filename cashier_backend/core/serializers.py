from rest_framework import serializers
from .models import Product, Sale, SaleItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class SaleItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    class Meta:
        model = SaleItem
        fields = ['id', 'product', 'product_name', 'quantity', 'subtotal']

class SaleSerializer(serializers.ModelSerializer):
    items = SaleItemSerializer(many=True)
    class Meta:
        model = Sale
        fields = ['id', 'date', 'total_amount', 'items']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        sale = Sale.objects.create(**validated_data)
        total = 0
        for item in items_data:
            product = item['product']
            quantity = item['quantity']
            subtotal = product.price * quantity
            SaleItem.objects.create(sale=sale, product=product, quantity=quantity, subtotal=subtotal)
            total += subtotal
            product.stock -= quantity
            product.save()
        sale.total_amount = total
        sale.save()
        return sale
