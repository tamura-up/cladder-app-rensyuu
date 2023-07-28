import datetime

from lib.interfaces.application.exceptions import ApplicationException


class SheetDateRangeValidator:
    @classmethod
    def validate(
        cls,
        start_date: datetime.date,
        end_date: datetime.date,
    ) -> bool:
        if start_date and end_date:
            if start_date > end_date:
                raise ApplicationException("運用終了日は運用開始日以降を指定してください")

        return True
