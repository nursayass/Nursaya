from django.contrib import admin
from django.urls import path,include
from api.views import get_companies, get_vacancies, get_top_ten_vacancies

urlpatterns = [

    path('companies/', get_companies),
    path('companies/<int:pk>/', get_companies),
    path('companies/<int:pk_c>/vacancies/', get_vacancies),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:pk>', get_vacancies),
    path('vacancies/top_ten/', get_top_ten_vacancies),
]