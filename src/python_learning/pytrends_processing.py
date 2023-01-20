import pandas as pd
import matplotlib.pyplot as plt

from pytrends.request import TrendReq
from typing import List, Dict


class PyTrendsProcessing:
    # Docs here: https://github.com/GeneralMills/pytrends
    def __init__(self, timeframe: str = 'today 1-y', ):
        self.pytrends = TrendReq(hl='en-US', tz=360)
        self.timeframe: str = timeframe

    def get_data(self, kw_list: List[str]) -> pd.DataFrame:
        self.pytrends.build_payload(kw_list=kw_list, timeframe=self.timeframe)
        return self.pytrends.interest_over_time()  # dataframe

    @staticmethod
    def save_data(_df: pd.DataFrame) -> None:
        _df.to_csv("data/blockchain.csv")

    @staticmethod
    def plot_data(df: pd.DataFrame, title: str, x_label: str, y_label: str, file_name: str) -> None:
        plt.plot(df.index, df[title])
        plt.xlabel(x_label)
        plt.ylabel(y_label)
        plt.savefig(file_name)
        plt.show()


def main():
    pytrends = PyTrendsProcessing()
    df = pytrends.get_data(['blockchain'])
    pytrends.save_data(df)
    pytrends.plot_data(df, 'blockchain', 'Date', 'Interest', 'blockchain.png')
    # pytrends.plot_data(df, 'bitcoin', 'Date', 'Interest', 'bitcoin.png')
    # pytrends.plot_data(df, 'ethereum', 'Date', 'Interest', 'ethereum.png')


if __name__ == '__main__':
    main()
