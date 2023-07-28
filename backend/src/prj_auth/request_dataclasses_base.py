# ===================================================================================================
# このファイルは自動作成されました。
# 上書きされる可能性があるため、変更する場合は別のモジュールで 継承 or 新規作成 して変更してください。
# ===================================================================================================

from dataclasses import dataclass


@dataclass
class RegisterUserRequestA:
    username: str = None
    last_name: str = None
    first_name: str = None
    password: str = None
