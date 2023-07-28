from ladder.models import LadderSheet
from ladder.resources.request_dataclasses_base import LadderSheetRequestA
from ladder.use_cases.ladder_sheet.validators import SheetDateRangeValidator
from request_dataclass_gen.data_wrapper import RequestData


class LadderSheetEditAction:
    def __init__(self, instance: LadderSheet, data: RequestData[LadderSheetRequestA]):
        self.instance = instance
        self.req_data = data

    def __call__(self, *args, **kwargs) -> LadderSheet:

        data = self.req_data.data
        SheetDateRangeValidator.validate(data.start_date, data.end_date)

        for attr, value in self.req_data.edit_fields_asdict().items():
            setattr(self.instance, attr, value)
        self.instance.save()
        return self.instance
