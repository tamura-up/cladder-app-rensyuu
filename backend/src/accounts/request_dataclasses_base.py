# ===================================================================================================
# このファイルは自動作成されました。
# 上書きされる可能性があるため、変更する場合は別のモジュールで 継承 or 新規作成 して変更してください。
# ===================================================================================================

import typing
from dataclasses import dataclass


@dataclass
class UserDetailRequestA:
    first_name: str = None
    last_name: str = None
    profile_icon: typing.Any = None
