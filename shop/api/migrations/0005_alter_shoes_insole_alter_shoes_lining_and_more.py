# Generated by Django 5.1.2 on 2024-10-26 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_shoes_insole_alter_shoes_lining_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='Insole',
            field=models.CharField(blank=True, default=False, max_length=64),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='Lining',
            field=models.CharField(blank=True, default=False, max_length=64),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='Sole',
            field=models.CharField(blank=True, default=False, max_length=64),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='discount',
            field=models.IntegerField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='shoes',
            name='material',
            field=models.CharField(blank=True, default=False, max_length=64),
        ),
    ]