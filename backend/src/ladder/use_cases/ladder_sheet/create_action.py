from ladder.models import LadderSheet
from ladder.resources.request_dataclasses_base import LadderSheetRequestA
from ladder.use_cases.ladder_sheet.validators import SheetDateRangeValidator
from request_dataclass_gen.data_wrapper import RequestData


class LadderSheetCreateAction:
    def __init__(self, data: RequestData[LadderSheetRequestA]):
        self.req_data = data

    def __call__(self, *args, **kwargs) -> LadderSheet:
        data = self.req_data.data
        SheetDateRangeValidator.validate(data.start_date, data.end_date)

        props = self.req_data.asdict()
        props.pop("target_list")
        instance = LadderSheet(**props)
        instance.target_list = data.target_list
        instance.save()
        instance.refresh_from_db()

        return instance
