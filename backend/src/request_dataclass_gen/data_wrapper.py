import copy
from dataclasses import asdict, dataclass
from typing import Generic, Type, TypeVar

T = TypeVar("T", bound=dataclass)


class RequestData(Generic[T]):
    """リクエストデータ保持用のクラス"""

    def __init__(self, dataCls: Type[T], data: dict):
        """
        dataCls: data バインド用の dataclass クラス
        data: post データを想定
        """
        self.edit_fields = list(data.keys())
        self.data = dataCls(**data)  # type:T
        self._raw_data = copy.deepcopy(data)

    def edit_fields_asdict(self) -> dict:
        return {f: getattr(self.data, f) for f in self.edit_fields}

    def asdict(self) -> dict:
        return asdict(self.data)


def generate_request_data(datacls: Type[T], data: dict) -> RequestData[T]:
    """RequestData を生成"""
    return RequestData(datacls, data)
