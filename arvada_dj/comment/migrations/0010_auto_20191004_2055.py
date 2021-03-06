# Generated by Django 2.2.4 on 2019-10-04 20:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contenttypes', '0002_remove_content_type_name'),
        ('comment', '0009_auto_20191001_1611'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='generation',
            field=models.CharField(max_length=40, null=True),
        ),
        migrations.CreateModel(
            name='Response',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=80)),
                ('text', models.TextField()),
                ('time_stamp', models.DateTimeField()),
                ('object_id', models.PositiveIntegerField()),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType')),
                ('owner', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='response', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
