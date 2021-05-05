"""Urls"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("planner/", include("planner.urls")),
    path("api/", include("api.urls")),
    path("authentication/", include("accounts.urls")),
    path('schema', get_schema_view(
        title="TripPlanner",
        description="API for the TripPlanner.",
    ), name='openapi-schema'),
]
