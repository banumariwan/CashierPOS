from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, SaleViewSet, dashboard

router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('sales', SaleViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/', dashboard),
]
