from django.contrib import admin

from .models import LadderCriterion, LadderDomainClass, LadderDomainHead, LadderSheet

admin.site.register(LadderSheet)
admin.site.register(LadderCriterion)
admin.site.register(LadderDomainHead)
admin.site.register(LadderDomainClass)
