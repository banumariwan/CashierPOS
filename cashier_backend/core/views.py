from rest_framework import viewsets, filters
from .models import Product, Sale
from .serializers import ProductSerializer, SaleSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

@api_view(['GET'])
def dashboard(request):
    total_sales = Sale.objects.count()
    total_revenue = sum([s.total_amount for s in Sale.objects.all()])
    top_products = Product.objects.order_by('-stock')[:5]
    return Response({
        'total_sales': total_sales,
        'total_revenue': total_revenue,
        'top_products': [p.name for p in top_products]
    })
