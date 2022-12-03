export interface Stocks {
    c: number;
    d: number;
    h: number;
    o: number;
    dp: number;
    l: number;
    pc: number;
    searchInput: string;
    title: string;
}

export interface Sentiment{
    data: Array<SentimentofArray>;
    symbol:string;

}
export interface SentimentofArray{
    symbol: string;
    month: number;
    change: number;
    mspr: number;
}