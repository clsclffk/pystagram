from rest_framework import serializers
from .models import User, Relationship

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'profile_image', 'short_description']

class FollowingSerializer(serializers.ModelSerializer):
    following = UserSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'following']

class FollowerSerializer(serializers.ModelSerializer):
    followers = UserSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'followers']