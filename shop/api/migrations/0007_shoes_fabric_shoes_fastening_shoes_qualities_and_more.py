# Generated by Django 5.1.2 on 2024-11-03 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_shoes_insole_remove_shoes_lining_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoes',
            name='fabric',
            field=models.CharField(blank=True, default='', max_length=64),
        ),
        migrations.AddField(
            model_name='shoes',
            name='fastening',
            field=models.CharField(blank=True, default='', max_length=64),
        ),
        migrations.AddField(
            model_name='shoes',
            name='qualities',
            field=models.CharField(blank=True, default='', max_length=64),
        ),
        migrations.AddField(
            model_name='shoes',
            name='shoetip',
            field=models.CharField(blank=True, default='', max_length=64),
        ),
    ]
