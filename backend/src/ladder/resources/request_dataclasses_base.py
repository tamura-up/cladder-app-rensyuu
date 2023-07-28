# ===================================================================================================
# このファイルは自動作成されました。
# 上書きされる可能性があるため、変更する場合は別のモジュールで 継承 or 新規作成 して変更してください。
# ===================================================================================================
import datetime
import typing
from dataclasses import dataclass


@dataclass
class LadderSheetRequestA:
    domain_head: int = None
    level: int = None
    name: str = None
    target_list: typing.Any = None
    point_legend: typing.Any = None
    max_point: int = None
    start_date: datetime.date = None
    end_date: datetime.date = None
