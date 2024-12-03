"""pennypilot URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('search/', views.search, name='search'),
    path('add_transaction/', views.add_transaction, name='add_transaction'),
    path('update_savings_goal/', views.update_savings_goal, name='update_savings_goal'),
    path('update_budget/', views.update_budget, name='update_budget'),
    path('line_chart_data/', views.get_line_chart_data, name='line_chart_data'),
    path('gauge_chart_data/', views.get_gauge_chart_data, name='gauge_chart_data'),
]
