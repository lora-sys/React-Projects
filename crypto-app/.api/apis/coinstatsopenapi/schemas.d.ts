declare const AddPortfolioTransaction: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly coinId: {
                readonly type: "string";
                readonly description: "Coin ID from CoinStats API. For fiats you can send coin ID like this: FiatCoinUSD.";
                readonly examples: readonly ["bitcoin"];
            };
            readonly count: {
                readonly type: "number";
                readonly description: "Amount of coin. For sell transactions, this should be negative.";
                readonly examples: readonly [0.1];
            };
            readonly date: {
                readonly type: "number";
                readonly description: "Transaction date in milliseconds. If not provided, current date will be used.";
                readonly examples: readonly [1715948176654];
            };
            readonly price: {
                readonly type: "number";
                readonly description: "Price of coin in USD at the time of transaction.";
                readonly examples: readonly [66252.93];
            };
            readonly portfolioId: {
                readonly type: "string";
                readonly description: "If shared portfolio is not manual portfolio, then this field is required.";
                readonly examples: readonly ["xobgM6CHi1zaEJaCXmPWenVoS"];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Default is USD.";
                readonly examples: readonly ["USD"];
            };
            readonly notes: {
                readonly type: "string";
                readonly description: "Transaction notes.";
                readonly examples: readonly ["Some notes."];
            };
        };
        readonly required: readonly ["coinId", "count"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly shareToken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "<b>To access your Share Token</b>\nVisit <a target='_blank' href='https://coinstats.app/portfolio'>CoinStats Portfolio</a> and make sure you are signed in to your account.\nIn the top-right corner of the page, click on the Share button.\nThis will bring up sharing preferences for your portfolio.\nGenerate a Share Link. \nIn the generated URL, the segment following <code>/r/</code> (e.g., <code>XXX</code>) is your share token. \nCopy only that token (without additional slashes or characters).\nUse the Token in the API";
                };
            };
            readonly required: readonly ["shareToken"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionType: {
                    readonly type: "string";
                };
                readonly date: {
                    readonly type: "string";
                };
                readonly coinData: {
                    readonly type: "object";
                    readonly properties: {
                        readonly identifier: {
                            readonly type: "string";
                        };
                        readonly count: {
                            readonly type: "number";
                        };
                        readonly symbol: {
                            readonly type: "string";
                        };
                        readonly totalWorth: {
                            readonly type: "number";
                        };
                        readonly currentValue: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["identifier", "count", "symbol", "totalWorth", "currentValue"];
                };
                readonly profitLoss: {
                    readonly type: "object";
                    readonly properties: {
                        readonly profit: {
                            readonly type: "number";
                        };
                        readonly profitPercent: {
                            readonly type: "number";
                        };
                        readonly currentValue: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["profit", "profitPercent", "currentValue"];
                };
                readonly fee: {
                    readonly type: "object";
                    readonly properties: {
                        readonly coin: {
                            readonly type: "object";
                            readonly properties: {
                                readonly rank: {
                                    readonly type: "number";
                                    readonly description: "Coin Rank";
                                };
                                readonly identifier: {
                                    readonly type: "string";
                                    readonly description: "Coin Identifier";
                                };
                                readonly symbol: {
                                    readonly type: "string";
                                    readonly description: "Coin Rank";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly icon: {
                                    readonly type: "string";
                                };
                                readonly isFake: {
                                    readonly type: "boolean";
                                };
                                readonly isFiat: {
                                    readonly type: "boolean";
                                };
                                readonly priceChange24h: {
                                    readonly type: "number";
                                };
                                readonly priceChange1h: {
                                    readonly type: "number";
                                };
                                readonly priceChange7d: {
                                    readonly type: "number";
                                };
                                readonly volume: {
                                    readonly type: "number";
                                };
                            };
                            readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                        };
                        readonly count: {
                            readonly type: "number";
                        };
                        readonly toAddress: {
                            readonly type: "string";
                        };
                        readonly fromAddress: {
                            readonly type: "string";
                        };
                        readonly totalWorth: {
                            readonly type: "number";
                        };
                        readonly price: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["coin", "count", "totalWorth", "price"];
                };
                readonly transfers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transferType: {
                                readonly type: "string";
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly coin: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly rank: {
                                                    readonly type: "number";
                                                    readonly description: "Coin Rank";
                                                };
                                                readonly identifier: {
                                                    readonly type: "string";
                                                    readonly description: "Coin Identifier";
                                                };
                                                readonly symbol: {
                                                    readonly type: "string";
                                                    readonly description: "Coin Rank";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly icon: {
                                                    readonly type: "string";
                                                };
                                                readonly isFake: {
                                                    readonly type: "boolean";
                                                };
                                                readonly isFiat: {
                                                    readonly type: "boolean";
                                                };
                                                readonly priceChange24h: {
                                                    readonly type: "number";
                                                };
                                                readonly priceChange1h: {
                                                    readonly type: "number";
                                                };
                                                readonly priceChange7d: {
                                                    readonly type: "number";
                                                };
                                                readonly volume: {
                                                    readonly type: "number";
                                                };
                                            };
                                            readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                        };
                                        readonly toAddress: {
                                            readonly type: "string";
                                        };
                                        readonly fromAddress: {
                                            readonly type: "string";
                                        };
                                        readonly totalWorth: {
                                            readonly type: "number";
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["coin"];
                                };
                            };
                        };
                        readonly required: readonly ["transferType", "items"];
                    };
                };
                readonly portfolioInfo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly icon: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["name", "icon"];
                };
            };
            readonly required: readonly ["transactionType", "date", "profitLoss", "fee", "portfolioInfo"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const BtcDominance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["24h", "1w", "1m", "3m", "6m", "1y", "all"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time period for the data";
                };
            };
            readonly required: readonly ["type"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly description: "Array of timestamp and BTC dominance percentage pairs";
                    readonly items: {
                        readonly type: "array";
                        readonly items: {
                            readonly oneOf: readonly [{
                                readonly type: "number";
                                readonly description: "Unix timestamp in seconds";
                            }, {
                                readonly type: "number";
                                readonly description: "BTC dominance percentage";
                            }];
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ExchangeSyncStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance call response.";
                };
            };
            readonly required: readonly ["portfolioId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "string";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance call response.";
                };
            };
            readonly required: readonly ["success"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FearAndGreed: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name of the index";
                    readonly examples: readonly ["Fear and Greed Index"];
                };
                readonly now: {
                    readonly description: "Current Fear and Greed index data";
                    readonly type: "object";
                    readonly required: readonly ["value", "value_classification", "timestamp", "update_time"];
                    readonly properties: {
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Numeric value of the Fear and Greed index (0-100)";
                            readonly examples: readonly [73];
                        };
                        readonly value_classification: {
                            readonly type: "string";
                            readonly description: "Classification of the value (Extreme fear, Fear, Neutral, Greed, Extreme greed)";
                            readonly examples: readonly ["Greed"];
                        };
                        readonly timestamp: {
                            readonly type: "number";
                            readonly description: "Unix timestamp in seconds";
                            readonly examples: readonly [1747052304];
                        };
                        readonly update_time: {
                            readonly type: "string";
                            readonly description: "ISO timestamp of when the data was last updated";
                            readonly examples: readonly ["2025-05-12T12:08:10.020Z"];
                        };
                    };
                };
                readonly yesterday: {
                    readonly description: "Fear and Greed index data from yesterday";
                    readonly type: "object";
                    readonly required: readonly ["value", "value_classification", "timestamp"];
                    readonly properties: {
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Numeric value of the Fear and Greed index (0-100)";
                            readonly examples: readonly [73];
                        };
                        readonly value_classification: {
                            readonly type: "string";
                            readonly description: "Classification of the value (Extreme fear, Fear, Neutral, Greed, Extreme greed)";
                            readonly examples: readonly ["Greed"];
                        };
                        readonly timestamp: {
                            readonly type: "number";
                            readonly description: "Unix timestamp in seconds";
                            readonly examples: readonly [1747052304];
                        };
                    };
                };
                readonly lastWeek: {
                    readonly description: "Fear and Greed index data from last week";
                    readonly type: "object";
                    readonly required: readonly ["value", "value_classification", "timestamp"];
                    readonly properties: {
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Numeric value of the Fear and Greed index (0-100)";
                            readonly examples: readonly [73];
                        };
                        readonly value_classification: {
                            readonly type: "string";
                            readonly description: "Classification of the value (Extreme fear, Fear, Neutral, Greed, Extreme greed)";
                            readonly examples: readonly ["Greed"];
                        };
                        readonly timestamp: {
                            readonly type: "number";
                            readonly description: "Unix timestamp in seconds";
                            readonly examples: readonly [1747052304];
                        };
                    };
                };
            };
            readonly required: readonly ["name", "now", "yesterday", "lastWeek"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FearAndGreedChart: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name of the index";
                    readonly examples: readonly ["Fear and Greed Index"];
                };
                readonly data: {
                    readonly description: "Array of fear and greed data points";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly timestamp: {
                                readonly type: "string";
                                readonly description: "Unix timestamp as string";
                                readonly examples: readonly ["1746921600"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly description: "Fear and Greed index value (0-100)";
                                readonly examples: readonly [75];
                            };
                            readonly value_classification: {
                                readonly type: "string";
                                readonly description: "Classification of the value\n\n`Extreme fear` `Fear` `Neutral` `Greed` `Extreme greed`";
                                readonly enum: readonly ["Extreme fear", "Fear", "Neutral", "Greed", "Extreme greed"];
                                readonly examples: readonly ["Greed"];
                            };
                        };
                        readonly required: readonly ["timestamp", "value", "value_classification"];
                    };
                };
            };
            readonly required: readonly ["name", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBlockchains: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly connectionId: {
                        readonly type: "string";
                    };
                    readonly chain: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "connectionId", "chain", "icon"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoinAvgPrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly examples: readonly ["bitcoin"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp: {
                    readonly type: "number";
                    readonly examples: readonly [1636315200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["coinId", "timestamp"];
        }];
    };
};
declare const GetCoinById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of coin, which you received from /coins call response.";
                };
            };
            readonly required: readonly ["coinId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly icon: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly symbol: {
                    readonly type: "string";
                };
                readonly rank: {
                    readonly type: "number";
                };
                readonly price: {
                    readonly type: "number";
                };
                readonly priceBtc: {
                    readonly type: "number";
                };
                readonly volume: {
                    readonly type: "number";
                };
                readonly marketCap: {
                    readonly type: "number";
                };
                readonly availableSupply: {
                    readonly type: "number";
                };
                readonly totalSupply: {
                    readonly type: "number";
                };
                readonly fullyDilutedValuation: {
                    readonly type: "number";
                };
                readonly priceChange1h: {
                    readonly type: "number";
                };
                readonly priceChange1d: {
                    readonly type: "number";
                };
                readonly priceChange1w: {
                    readonly type: "number";
                };
                readonly websiteUrl: {
                    readonly type: "string";
                };
                readonly redditUrl: {
                    readonly type: "string";
                };
                readonly twitterUrl: {
                    readonly type: "string";
                };
                readonly contractAddress: {
                    readonly type: "string";
                };
                readonly decimals: {
                    readonly type: "number";
                };
                readonly explorers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly liquidityScore: {
                    readonly type: "number";
                };
                readonly volatilityScore: {
                    readonly type: "number";
                };
                readonly marketCapScore: {
                    readonly type: "number";
                };
                readonly riskScore: {
                    readonly type: "number";
                };
                readonly avgChange: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["id", "icon", "name", "symbol", "rank", "price", "priceBtc", "volume", "marketCap", "availableSupply", "totalSupply", "fullyDilutedValuation", "priceChange1h", "priceChange1d", "priceChange1w", "websiteUrl", "redditUrl", "twitterUrl", "explorers"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoinChartById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of coin, which you received from /coins call response.";
                };
            };
            readonly required: readonly ["coinId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly period: {
                    readonly enum: readonly ["all", "24h", "1w", "1m", "3m", "6m", "1y"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["period"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "Array of data points: [TIMESTAMP, USD, BTC, ETH]";
                readonly type: "array";
                readonly items: {
                    readonly type: "number";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoinExchangePrice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["Binance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly type: "string";
                    readonly examples: readonly ["BTC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly examples: readonly ["ETH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp: {
                    readonly type: "number";
                    readonly examples: readonly [1636315200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["exchange", "from", "to", "timestamp"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly price: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["price"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCoins: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["bitcoin"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search coins by name";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly examples: readonly ["BTC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get coins by symbol";
                };
                readonly blockchains: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seperate by commas ( , ) eg. ethereum,solana";
                };
                readonly includeRiskScore: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "true or false. Default - false";
                };
                readonly categories: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Seperate by commas ( , ) eg. memecoins,sports";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly examples: readonly ["rank"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of filter fields";
                };
                readonly sortDir: {
                    readonly type: "string";
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of asc, desc";
                };
                readonly "marketCap~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Marketcap Greater Than";
                };
                readonly "marketCap~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Marketcap Equals";
                };
                readonly "marketCap~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Marketcap Less Than";
                };
                readonly "fullyDilutedValuation~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Fully Diluted Valuation Greater Than";
                };
                readonly "fullyDilutedValuation~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Fully Diluted Valuation Equals";
                };
                readonly "fullyDilutedValuation~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Fully Diluted Valuation Less Than";
                };
                readonly "volume~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Volume Greater Than";
                };
                readonly "volume~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Volume Equals";
                };
                readonly "volume~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Volume Less Than";
                };
                readonly "priceChange1h~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1h Greater Than";
                };
                readonly "priceChange1h~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1h Equals";
                };
                readonly "priceChange1h~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1h Less Than";
                };
                readonly "priceChange1d~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1d Greater Than";
                };
                readonly "priceChange1d~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1d Equals";
                };
                readonly "priceChange1d~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 1d Less Than";
                };
                readonly "priceChange7d~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 7d Greater Than";
                };
                readonly "priceChange7d~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 7d Equals";
                };
                readonly "priceChange7d~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Change 7d Less Than";
                };
                readonly "availableSupply~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Available Supply Greater Than";
                };
                readonly "availableSupply~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Available Supply Equals";
                };
                readonly "availableSupply~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Available Supply Less Than";
                };
                readonly "totalSupply~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Total Supply Greater Than";
                };
                readonly "totalSupply~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Total Supply Equals";
                };
                readonly "totalSupply~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Total Supply Less Than";
                };
                readonly "rank~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rank Greater Than";
                };
                readonly "rank~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rank Equals";
                };
                readonly "rank~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rank Less Than";
                };
                readonly "price~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Greater Than";
                };
                readonly "price~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Equals";
                };
                readonly "price~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Price Less Than";
                };
                readonly "riskScore~greaterThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Risk Score Greater Than (Only if includeRiskScore=true)";
                };
                readonly "riskScore~equals": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "RiskScore Equals (Only if includeRiskScore=true)";
                };
                readonly "riskScore~lessThan": {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "RiskScore Less Than (Only if includeRiskScore=true)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly icon: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly symbol: {
                                readonly type: "string";
                            };
                            readonly rank: {
                                readonly type: "number";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                            readonly priceBtc: {
                                readonly type: "number";
                            };
                            readonly volume: {
                                readonly type: "number";
                            };
                            readonly marketCap: {
                                readonly type: "number";
                            };
                            readonly availableSupply: {
                                readonly type: "number";
                            };
                            readonly totalSupply: {
                                readonly type: "number";
                            };
                            readonly fullyDilutedValuation: {
                                readonly type: "number";
                            };
                            readonly priceChange1h: {
                                readonly type: "number";
                            };
                            readonly priceChange1d: {
                                readonly type: "number";
                            };
                            readonly priceChange1w: {
                                readonly type: "number";
                            };
                            readonly websiteUrl: {
                                readonly type: "string";
                            };
                            readonly redditUrl: {
                                readonly type: "string";
                            };
                            readonly twitterUrl: {
                                readonly type: "string";
                            };
                            readonly contractAddress: {
                                readonly type: "string";
                            };
                            readonly decimals: {
                                readonly type: "number";
                            };
                            readonly explorers: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly liquidityScore: {
                                readonly type: "number";
                            };
                            readonly volatilityScore: {
                                readonly type: "number";
                            };
                            readonly marketCapScore: {
                                readonly type: "number";
                            };
                            readonly riskScore: {
                                readonly type: "number";
                            };
                            readonly avgChange: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["id", "icon", "name", "symbol", "rank", "price", "priceBtc", "volume", "marketCap", "availableSupply", "totalSupply", "fullyDilutedValuation", "priceChange1h", "priceChange1d", "priceChange1w", "websiteUrl", "redditUrl", "twitterUrl", "explorers"];
                    };
                };
            };
            readonly required: readonly ["meta", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeBalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly connectionFields: {
                readonly type: "object";
                readonly description: "The credentials given from exchange. key, secret etc.";
                readonly additionalProperties: true;
            };
            readonly connectionId: {
                readonly type: "string";
                readonly description: "The exchange connection id";
                readonly examples: readonly ["binance"];
            };
        };
        readonly required: readonly ["connectionFields", "connectionId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly balances: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly coinId: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "number";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                            readonly priceBtc: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["coinId", "amount", "price", "priceBtc"];
                    };
                };
                readonly portfolio: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly connectionId: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "status", "connectionId"];
                };
            };
            readonly required: readonly ["balances", "portfolio"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeChart: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance call response.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of 24h, 1w, 1m, 3m, 6m, 1y, all time periods.";
                };
            };
            readonly required: readonly ["portfolioId", "type"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly description: "[ TIMESTAMP, USD, BTC, ETH ]";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeSyncStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance call response.";
                };
            };
            readonly required: readonly ["portfolioId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-21T05:03:22.845Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-22T07:03:22.845Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma separated values of (deposit,withdraw,approve,executed,balance,fee)";
                };
                readonly portfolioId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of portfolio, which you received from /exchange/balance response.";
                };
            };
            readonly required: readonly ["portfolioId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                        };
                        readonly limit: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["page", "limit"];
                };
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["deposit", "withdraw", "approve", "executed", "balance", "fee"];
                                readonly description: "`deposit` `withdraw` `approve` `executed` `balance` `fee`";
                            };
                            readonly date: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly mainContent: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly coinIcons: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly coinAssets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly required: readonly ["coinIcons", "coinAssets"];
                            };
                            readonly coinData: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["count", "symbol", "currentValue"];
                                readonly properties: {
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly profitLoss: {
                                readonly description: "Only sent if there is at least 1 coin in transactions";
                                readonly type: "object";
                                readonly required: readonly ["profit", "profitPercent"];
                                readonly properties: {
                                    readonly profit: {
                                        readonly type: "number";
                                    };
                                    readonly profitPercent: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly transactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly action: {
                                            readonly type: "string";
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly required: readonly ["action", "items"];
                                };
                            };
                            readonly fee: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Sent only when fee is another transaction object";
                                    };
                                    readonly coin: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly symbol: {
                                                readonly type: "string";
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "name", "symbol", "icon"];
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["coin", "count", "totalWorth"];
                            };
                            readonly hash: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly explorerUrl: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "explorerUrl"];
                            };
                        };
                        readonly required: readonly ["type", "date", "mainContent", "transactions"];
                    };
                };
            };
            readonly required: readonly ["meta", "result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchanges: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly connectionId: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                    readonly connectionFields: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["name", "connectionId", "icon", "connectionFields"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFiatCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly rate: {
                        readonly type: "number";
                    };
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly imageUrl: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "rate", "symbol", "imageUrl"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMarketCap: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly marketCap: {
                    readonly type: "number";
                };
                readonly volume: {
                    readonly type: "number";
                };
                readonly btcDominance: {
                    readonly type: "number";
                };
                readonly marketCapChange: {
                    readonly type: "number";
                };
                readonly volumeChange: {
                    readonly type: "number";
                };
                readonly btcDominanceChange: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["marketCap", "volume", "btcDominance", "marketCapChange", "volumeChange", "btcDominanceChange"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNews: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-21T05:03:22.849Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-22T07:03:22.849Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly searchKeyWords: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly feedDate: {
                                readonly type: "number";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly title: {
                                readonly type: "string";
                            };
                            readonly isFeatured: {
                                readonly type: "boolean";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly imgURL: {
                                readonly type: "string";
                            };
                            readonly link: {
                                readonly type: "string";
                            };
                            readonly sourceLink: {
                                readonly type: "string";
                            };
                            readonly imgUrl: {
                                readonly type: "string";
                            };
                            readonly reactionsCount: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly reactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly shareURL: {
                                readonly type: "string";
                            };
                            readonly relatedCoins: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly content: {
                                readonly type: "boolean";
                            };
                            readonly bigImg: {
                                readonly type: "boolean";
                            };
                            readonly coins: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly searchKeyWords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly feedDate: {
                    readonly type: "number";
                };
                readonly source: {
                    readonly type: "string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly isFeatured: {
                    readonly type: "boolean";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly imgURL: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly sourceLink: {
                    readonly type: "string";
                };
                readonly imgUrl: {
                    readonly type: "string";
                };
                readonly reactionsCount: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly reactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly shareURL: {
                    readonly type: "string";
                };
                readonly relatedCoins: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly content: {
                    readonly type: "boolean";
                };
                readonly bigImg: {
                    readonly type: "boolean";
                };
                readonly coins: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsByType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["handpicked", "trending", "latest", "bullish", "bearish"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["type"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly searchKeyWords: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly feedDate: {
                        readonly type: "number";
                    };
                    readonly source: {
                        readonly type: "string";
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly isFeatured: {
                        readonly type: "boolean";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly imgURL: {
                        readonly type: "string";
                    };
                    readonly link: {
                        readonly type: "string";
                    };
                    readonly sourceLink: {
                        readonly type: "string";
                    };
                    readonly imgUrl: {
                        readonly type: "string";
                    };
                    readonly reactionsCount: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly shareURL: {
                        readonly type: "string";
                    };
                    readonly relatedCoins: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly content: {
                        readonly type: "boolean";
                    };
                    readonly bigImg: {
                        readonly type: "boolean";
                    };
                    readonly coins: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["id", "feedDate", "source", "title", "isFeatured", "link", "sourceLink", "imgUrl", "reactionsCount", "reactions", "shareURL", "relatedCoins", "content", "bigImg"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNewsSources: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly sourcename: {
                        readonly type: "string";
                    };
                    readonly coinid: {
                        readonly type: "string";
                    };
                    readonly logo: {
                        readonly type: "string";
                    };
                    readonly sourceImg: {
                        readonly type: "string";
                    };
                    readonly weburl: {
                        readonly type: "string";
                    };
                    readonly feedurl: {
                        readonly type: "string";
                    };
                    readonly _created_at: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                    readonly _updated_at: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["sourcename", "weburl", "feedurl", "_created_at"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionAssetByTokenid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress", "tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                };
                readonly blockchain: {
                    readonly type: "string";
                };
                readonly tokenId: {
                    readonly type: "string";
                };
                readonly attributes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly collectionId: {
                    readonly type: "string";
                };
                readonly lastSaleDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly lastSalePrice: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly previewUrl: {
                    readonly type: "string";
                };
                readonly rarityRank: {
                    readonly type: "number";
                };
                readonly rarityScore: {
                    readonly type: "number";
                };
                readonly source: {
                    readonly type: "string";
                };
                readonly standard: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly listSource: {
                    readonly type: "object";
                    readonly properties: {};
                };
                readonly listPrice: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["address", "blockchain", "tokenId", "attributes", "collectionId", "lastSaleDate", "lastSalePrice", "name", "previewUrl", "rarityRank", "rarityScore", "source", "standard", "url", "listSource", "listPrice"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionAssetsByAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly type: {
                    readonly enum: readonly ["listed", "all"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["address", "blockchain", "tokenId", "attributes", "collectionId", "lastSaleDate", "lastSalePrice", "name", "previewUrl", "rarityRank", "rarityScore", "source", "standard", "url", "listSource", "listPrice"];
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly blockchain: {
                                readonly type: "string";
                            };
                            readonly tokenId: {
                                readonly type: "string";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly collectionId: {
                                readonly type: "string";
                            };
                            readonly lastSaleDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                            };
                            readonly lastSalePrice: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly previewUrl: {
                                readonly type: "string";
                            };
                            readonly rarityRank: {
                                readonly type: "number";
                            };
                            readonly rarityScore: {
                                readonly type: "number";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly standard: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly listSource: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly listPrice: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftCollectionByAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["collectionAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                };
                readonly bannerImg: {
                    readonly type: "string";
                    readonly examples: readonly ["https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAM1rRhySRbERY0%2B6lnhVU9Ds%2BKgl0YTWu1CsabpicYXk7sRc87%2Bv7MV0GJIisUgdCn0xh3GghmVzyiBQm04y%2FNe30W0jRiHGqRrchCJdrbOlBwksv1hh6xX%2FzMYhpUp0%2Bpimr8XIJiS3Ugzqn3RpUUJ5WYT8ZJi%2B4RpGcBaOOYnuyBDHqGBZKKYLhXt04tPHfA%3D%3D"];
                };
                readonly blockchain: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly img: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly relevantUrls: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Etherscan"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                        };
                        readonly required: readonly ["name", "url"];
                    };
                };
                readonly slug: {
                    readonly type: "string";
                    readonly examples: readonly ["bored_ape_yacht_club"];
                };
                readonly slugCs: {
                    readonly type: "string";
                    readonly examples: readonly ["bored_ape_yacht_club"];
                };
                readonly source: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly verified: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly rank: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly rankAll: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly averagePrice: {
                    readonly type: "number";
                    readonly examples: readonly [14.49999];
                };
                readonly count: {
                    readonly type: "number";
                    readonly examples: readonly [200];
                };
                readonly floorPriceMc: {
                    readonly type: "number";
                    readonly examples: readonly [14.49999];
                };
                readonly floorPriceUsd: {
                    readonly type: "number";
                    readonly examples: readonly [20000];
                };
                readonly mainCurrencyId: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum"];
                };
                readonly marketcapMc: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly marketcapUsd: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly oneDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.06865];
                };
                readonly oneDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [5];
                };
                readonly ownersCount: {
                    readonly type: "number";
                    readonly examples: readonly [4309];
                };
                readonly sevenDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.0606129166666667];
                };
                readonly sevenDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly thirtyDayAveragePrice: {
                    readonly type: "number";
                    readonly examples: readonly [0.0606129166666667];
                };
                readonly thirtyDaySales: {
                    readonly type: "number";
                    readonly examples: readonly [23];
                };
                readonly thirtyDayVolume: {
                    readonly type: "number";
                    readonly examples: readonly [4.34301];
                };
                readonly totalSales: {
                    readonly type: "number";
                    readonly examples: readonly [2000];
                };
                readonly totalSupply: {
                    readonly type: "number";
                    readonly examples: readonly [5000];
                };
                readonly totalVolume: {
                    readonly type: "number";
                    readonly examples: readonly [50009];
                };
                readonly volumeMc24h: {
                    readonly type: "number";
                    readonly examples: readonly [10];
                };
                readonly volumeMc7d: {
                    readonly type: "number";
                    readonly examples: readonly [11];
                };
                readonly volumeUsd24h: {
                    readonly type: "number";
                    readonly examples: readonly [1200];
                };
                readonly volumeUsd7d: {
                    readonly type: "number";
                    readonly examples: readonly [1400];
                };
                readonly floorPriceChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly floorPriceChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [-19];
                };
                readonly marketcapChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly marketcapChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [-10];
                };
                readonly volumeChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [1000];
                };
                readonly volumeChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [12];
                };
                readonly ownersCountChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [3];
                };
                readonly ownersCountChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [8];
                };
                readonly salesInProfit: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly salesInProfitChange24h: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly salesInProfitChange7d: {
                    readonly type: "number";
                    readonly examples: readonly [8];
                };
                readonly oneDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
                readonly transactionsUpdateDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2022-08-11T13:33:50.563Z"];
                };
                readonly sevenDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [0.705128205128205];
                };
                readonly thirtyDayChange: {
                    readonly type: "number";
                    readonly examples: readonly [2.7];
                };
                readonly listedCount: {
                    readonly type: "number";
                    readonly examples: readonly [135];
                };
                readonly show: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly creatorFee: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                };
                readonly volume: {
                    readonly type: "number";
                    readonly examples: readonly [186.72795];
                };
                readonly createdDate: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-28T00:08:08.951Z"];
                };
            };
            readonly required: readonly ["address", "description", "name"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftsByWallet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["name", "logo", "address", "totalFloorPrice", "totalLastSalePrice", "id", "assetsCount", "assets", "floorPrice"];
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly logo: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly totalFloorPrice: {
                                readonly type: "number";
                            };
                            readonly totalLastSalePrice: {
                                readonly type: "number";
                            };
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly assetsCount: {
                                readonly type: "number";
                            };
                            readonly assets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly floorPrice: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPortfolioChart: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly shareToken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "<b>To access your Share Token</b>\nVisit <a target='_blank' href='https://coinstats.app/portfolio'>CoinStats Portfolio</a> and make sure you are signed in to your account.\nIn the top-right corner of the page, click on the Share button.\nThis will bring up sharing preferences for your portfolio.\nGenerate a Share Link. \nIn the generated URL, the segment following <code>/r/</code> (e.g., <code>XXX</code>) is your share token. \nCopy only that token (without additional slashes or characters).\nUse the Token in the API";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of 24h, 1w, 1m, 3m, 6m, 1y, all";
                };
            };
            readonly required: readonly ["shareToken", "type"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "array";
                        readonly items: {};
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPortfolioCoins: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly shareToken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "<b>To access your Share Token</b>\nVisit <a target='_blank' href='https://coinstats.app/portfolio'>CoinStats Portfolio</a> and make sure you are signed in to your account.\nIn the top-right corner of the page, click on the Share button.\nThis will bring up sharing preferences for your portfolio.\nGenerate a Share Link. \nIn the generated URL, the segment following <code>/r/</code> (e.g., <code>XXX</code>) is your share token. \nCopy only that token (without additional slashes or characters).\nUse the Token in the API";
                };
                readonly includeRiskScore: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "true or false. Default - false";
                };
            };
            readonly required: readonly ["shareToken"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly count: {
                                readonly type: "number";
                                readonly description: "Coin Count";
                                readonly examples: readonly [1];
                            };
                            readonly coin: {
                                readonly description: "Coin Object";
                                readonly type: "object";
                                readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                readonly properties: {
                                    readonly rank: {
                                        readonly type: "number";
                                        readonly description: "Coin Rank";
                                    };
                                    readonly identifier: {
                                        readonly type: "string";
                                        readonly description: "Coin Identifier";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly description: "Coin Rank";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly icon: {
                                        readonly type: "string";
                                    };
                                    readonly isFake: {
                                        readonly type: "boolean";
                                    };
                                    readonly isFiat: {
                                        readonly type: "boolean";
                                    };
                                    readonly priceChange24h: {
                                        readonly type: "number";
                                    };
                                    readonly priceChange1h: {
                                        readonly type: "number";
                                    };
                                    readonly priceChange7d: {
                                        readonly type: "number";
                                    };
                                    readonly volume: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly price: {
                                readonly description: "Price Object";
                                readonly type: "object";
                                readonly required: readonly ["USD", "BTC", "ETH"];
                                readonly properties: {
                                    readonly USD: {
                                        readonly type: "number";
                                        readonly description: "USD Value";
                                    };
                                    readonly BTC: {
                                        readonly type: "number";
                                        readonly description: "BTC Value";
                                    };
                                    readonly ETH: {
                                        readonly type: "number";
                                        readonly description: "ETH Value";
                                    };
                                };
                            };
                            readonly profit: {
                                readonly description: "Profit Object";
                                readonly type: "object";
                                readonly required: readonly ["allTime", "hour24", "lastTrade", "unrealized", "realized"];
                                readonly properties: {
                                    readonly allTime: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly unrealized: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly realized: {
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly averageBuy: {
                                readonly description: "Average Buy Object";
                                readonly type: "object";
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly unrealized: {
                                        readonly description: "Unrealized Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly averageSell: {
                                readonly description: "Average Sell Object";
                                readonly type: "object";
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly unrealized: {
                                        readonly description: "Unrealized Average Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly profitPercent: {
                                readonly description: "Profit Percent Object";
                                readonly type: "object";
                                readonly required: readonly ["allTime", "hour24", "lastTrade", "unrealized", "realized"];
                                readonly properties: {
                                    readonly allTime: {
                                        readonly description: "All Time Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly hour24: {
                                        readonly description: "24 Hour Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly lastTrade: {
                                        readonly description: "Last Trade Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly unrealized: {
                                        readonly description: "Unrealized Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                    readonly realized: {
                                        readonly description: "Realized Profit Percent Object";
                                        readonly type: "object";
                                        readonly required: readonly ["USD", "BTC", "ETH"];
                                        readonly properties: {
                                            readonly USD: {
                                                readonly type: "number";
                                                readonly description: "USD Value";
                                            };
                                            readonly BTC: {
                                                readonly type: "number";
                                                readonly description: "BTC Value";
                                            };
                                            readonly ETH: {
                                                readonly type: "number";
                                                readonly description: "ETH Value";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly liquidityScore: {
                                readonly type: "number";
                            };
                            readonly volatilityScore: {
                                readonly type: "number";
                            };
                            readonly marketCapScore: {
                                readonly type: "number";
                            };
                            readonly riskScore: {
                                readonly type: "number";
                            };
                            readonly avgChange: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["count", "coin", "price", "profitPercent"];
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPortfolioTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly coinId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly shareToken: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "<b>To access your Share Token</b>\nVisit <a target='_blank' href='https://coinstats.app/portfolio'>CoinStats Portfolio</a> and make sure you are signed in to your account.\nIn the top-right corner of the page, click on the Share button.\nThis will bring up sharing preferences for your portfolio.\nGenerate a Share Link. \nIn the generated URL, the segment following <code>/r/</code> (e.g., <code>XXX</code>) is your share token. \nCopy only that token (without additional slashes or characters).\nUse the Token in the API";
                };
            };
            readonly required: readonly ["currency", "shareToken"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transactionType: {
                                readonly type: "string";
                            };
                            readonly date: {
                                readonly type: "string";
                            };
                            readonly coinData: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly identifier: {
                                        readonly type: "string";
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["identifier", "count", "symbol", "totalWorth", "currentValue"];
                            };
                            readonly profitLoss: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly profit: {
                                        readonly type: "number";
                                    };
                                    readonly profitPercent: {
                                        readonly type: "number";
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["profit", "profitPercent", "currentValue"];
                            };
                            readonly fee: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly coin: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly rank: {
                                                readonly type: "number";
                                                readonly description: "Coin Rank";
                                            };
                                            readonly identifier: {
                                                readonly type: "string";
                                                readonly description: "Coin Identifier";
                                            };
                                            readonly symbol: {
                                                readonly type: "string";
                                                readonly description: "Coin Rank";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                            };
                                            readonly isFake: {
                                                readonly type: "boolean";
                                            };
                                            readonly isFiat: {
                                                readonly type: "boolean";
                                            };
                                            readonly priceChange24h: {
                                                readonly type: "number";
                                            };
                                            readonly priceChange1h: {
                                                readonly type: "number";
                                            };
                                            readonly priceChange7d: {
                                                readonly type: "number";
                                            };
                                            readonly volume: {
                                                readonly type: "number";
                                            };
                                        };
                                        readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                    };
                                    readonly count: {
                                        readonly type: "number";
                                    };
                                    readonly toAddress: {
                                        readonly type: "string";
                                    };
                                    readonly fromAddress: {
                                        readonly type: "string";
                                    };
                                    readonly totalWorth: {
                                        readonly type: "number";
                                    };
                                    readonly price: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: readonly ["coin", "count", "totalWorth", "price"];
                            };
                            readonly transfers: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly transferType: {
                                            readonly type: "string";
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly coin: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly rank: {
                                                                readonly type: "number";
                                                                readonly description: "Coin Rank";
                                                            };
                                                            readonly identifier: {
                                                                readonly type: "string";
                                                                readonly description: "Coin Identifier";
                                                            };
                                                            readonly symbol: {
                                                                readonly type: "string";
                                                                readonly description: "Coin Rank";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                            };
                                                            readonly icon: {
                                                                readonly type: "string";
                                                            };
                                                            readonly isFake: {
                                                                readonly type: "boolean";
                                                            };
                                                            readonly isFiat: {
                                                                readonly type: "boolean";
                                                            };
                                                            readonly priceChange24h: {
                                                                readonly type: "number";
                                                            };
                                                            readonly priceChange1h: {
                                                                readonly type: "number";
                                                            };
                                                            readonly priceChange7d: {
                                                                readonly type: "number";
                                                            };
                                                            readonly volume: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                        readonly required: readonly ["rank", "identifier", "symbol", "name", "icon", "priceChange24h", "priceChange1h", "priceChange7d", "volume"];
                                                    };
                                                    readonly count: {
                                                        readonly type: "number";
                                                    };
                                                    readonly toAddress: {
                                                        readonly type: "string";
                                                    };
                                                    readonly fromAddress: {
                                                        readonly type: "string";
                                                    };
                                                    readonly totalWorth: {
                                                        readonly type: "number";
                                                    };
                                                    readonly price: {
                                                        readonly type: "number";
                                                    };
                                                };
                                                readonly required: readonly ["coin"];
                                            };
                                        };
                                    };
                                    readonly required: readonly ["transferType", "items"];
                                };
                            };
                            readonly portfolioInfo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly icon: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "icon"];
                            };
                        };
                        readonly required: readonly ["transactionType", "date", "profitLoss", "fee", "portfolioInfo"];
                    };
                };
                readonly meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                        };
                        readonly limit: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["page", "limit"];
                };
            };
            readonly required: readonly ["data", "meta"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTickerExchanges: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly icon: {
                        readonly type: "string";
                    };
                    readonly rank: {
                        readonly type: "number";
                    };
                    readonly change24h: {
                        readonly type: "number";
                    };
                    readonly url: {
                        readonly type: "string";
                    };
                    readonly volume24h: {
                        readonly type: "number";
                    };
                    readonly volume7d: {
                        readonly type: "number";
                    };
                    readonly volume1m: {
                        readonly type: "number";
                    };
                };
                readonly required: readonly ["id", "name", "rank", "change24h", "volume24h", "volume7d"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTickerMarkets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["Binance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly fromCoin: {
                    readonly type: "string";
                    readonly examples: readonly ["BTC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly toCoin: {
                    readonly type: "string";
                    readonly examples: readonly ["USDT"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly coinId: {
                    readonly type: "string";
                    readonly examples: readonly ["bitcoin"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly onlyVerified: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly meta: {
                        readonly type: "object";
                        readonly properties: {
                            readonly page: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly limit: {
                                readonly type: "number";
                                readonly examples: readonly [40];
                            };
                            readonly itemCount: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                            readonly pageCount: {
                                readonly type: "number";
                                readonly examples: readonly [3];
                            };
                            readonly hasPreviousPage: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly hasNextPage: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                        };
                        readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    };
                    readonly result: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly price: {
                                    readonly type: "number";
                                };
                                readonly _created_at: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly _updated_at: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly exchange: {
                                    readonly type: "string";
                                };
                                readonly pair: {
                                    readonly type: "string";
                                };
                                readonly from: {
                                    readonly type: "string";
                                };
                                readonly to: {
                                    readonly type: "string";
                                };
                                readonly pairPrice: {
                                    readonly type: "number";
                                };
                                readonly pairVolume: {
                                    readonly type: "number";
                                };
                                readonly volume: {
                                    readonly type: "number";
                                };
                            };
                            readonly required: readonly ["price", "_created_at", "_updated_at", "exchange", "pair", "from", "to", "pairPrice", "pairVolume", "volume"];
                        };
                    };
                };
                readonly required: readonly ["meta", "result"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTrendingNfts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["meta"];
            readonly properties: {
                readonly meta: {
                    readonly type: "object";
                    readonly required: readonly ["page", "limit", "itemCount", "pageCount", "hasPreviousPage", "hasNextPage"];
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly examples: readonly [40];
                        };
                        readonly itemCount: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly pageCount: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                        readonly hasPreviousPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly hasNextPage: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["address", "description", "name"];
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                            readonly bannerImg: {
                                readonly type: "string";
                                readonly examples: readonly ["https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAM1rRhySRbERY0%2B6lnhVU9Ds%2BKgl0YTWu1CsabpicYXk7sRc87%2Bv7MV0GJIisUgdCn0xh3GghmVzyiBQm04y%2FNe30W0jRiHGqRrchCJdrbOlBwksv1hh6xX%2FzMYhpUp0%2Bpimr8XIJiS3Ugzqn3RpUUJ5WYT8ZJi%2B4RpGcBaOOYnuyBDHqGBZKKYLhXt04tPHfA%3D%3D"];
                            };
                            readonly blockchain: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly img: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly relevantUrls: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["name", "url"];
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Etherscan"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                            readonly slug: {
                                readonly type: "string";
                                readonly examples: readonly ["bored_ape_yacht_club"];
                            };
                            readonly slugCs: {
                                readonly type: "string";
                                readonly examples: readonly ["bored_ape_yacht_club"];
                            };
                            readonly source: {
                                readonly type: "string";
                                readonly examples: readonly ["opensea"];
                            };
                            readonly verified: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly rank: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly rankAll: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly averagePrice: {
                                readonly type: "number";
                                readonly examples: readonly [14.49999];
                            };
                            readonly count: {
                                readonly type: "number";
                                readonly examples: readonly [200];
                            };
                            readonly floorPriceMc: {
                                readonly type: "number";
                                readonly examples: readonly [14.49999];
                            };
                            readonly floorPriceUsd: {
                                readonly type: "number";
                                readonly examples: readonly [20000];
                            };
                            readonly mainCurrencyId: {
                                readonly type: "string";
                                readonly examples: readonly ["ethereum"];
                            };
                            readonly marketcapMc: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly marketcapUsd: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly oneDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.06865];
                            };
                            readonly oneDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [5];
                            };
                            readonly ownersCount: {
                                readonly type: "number";
                                readonly examples: readonly [4309];
                            };
                            readonly sevenDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.0606129166666667];
                            };
                            readonly sevenDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly thirtyDayAveragePrice: {
                                readonly type: "number";
                                readonly examples: readonly [0.0606129166666667];
                            };
                            readonly thirtyDaySales: {
                                readonly type: "number";
                                readonly examples: readonly [23];
                            };
                            readonly thirtyDayVolume: {
                                readonly type: "number";
                                readonly examples: readonly [4.34301];
                            };
                            readonly totalSales: {
                                readonly type: "number";
                                readonly examples: readonly [2000];
                            };
                            readonly totalSupply: {
                                readonly type: "number";
                                readonly examples: readonly [5000];
                            };
                            readonly totalVolume: {
                                readonly type: "number";
                                readonly examples: readonly [50009];
                            };
                            readonly volumeMc24h: {
                                readonly type: "number";
                                readonly examples: readonly [10];
                            };
                            readonly volumeMc7d: {
                                readonly type: "number";
                                readonly examples: readonly [11];
                            };
                            readonly volumeUsd24h: {
                                readonly type: "number";
                                readonly examples: readonly [1200];
                            };
                            readonly volumeUsd7d: {
                                readonly type: "number";
                                readonly examples: readonly [1400];
                            };
                            readonly floorPriceChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly floorPriceChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [-19];
                            };
                            readonly marketcapChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly marketcapChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [-10];
                            };
                            readonly volumeChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [1000];
                            };
                            readonly volumeChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [12];
                            };
                            readonly ownersCountChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [3];
                            };
                            readonly ownersCountChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [8];
                            };
                            readonly salesInProfit: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly salesInProfitChange24h: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                            readonly salesInProfitChange7d: {
                                readonly type: "number";
                                readonly examples: readonly [8];
                            };
                            readonly oneDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                            readonly transactionsUpdateDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2022-08-11T13:33:50.563Z"];
                            };
                            readonly sevenDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [0.705128205128205];
                            };
                            readonly thirtyDayChange: {
                                readonly type: "number";
                                readonly examples: readonly [2.7];
                            };
                            readonly listedCount: {
                                readonly type: "number";
                                readonly examples: readonly [135];
                            };
                            readonly show: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly creatorFee: {
                                readonly type: "number";
                                readonly examples: readonly [20];
                            };
                            readonly volume: {
                                readonly type: "number";
                                readonly examples: readonly [186.72795];
                            };
                            readonly createdDate: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2021-09-28T00:08:08.951Z"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletBalance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly chain: {
                        readonly type: "string";
                    };
                    readonly coinId: {
                        readonly type: "string";
                    };
                    readonly amount: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                    };
                    readonly priceBtc: {
                        readonly type: "number";
                    };
                    readonly imgUrl: {
                        readonly type: "string";
                    };
                    readonly pCh24h: {
                        readonly type: "number";
                    };
                    readonly rank: {
                        readonly type: "number";
                    };
                    readonly volume: {
                        readonly type: "number";
                    };
                    readonly decimals: {
                        readonly type: "number";
                    };
                    readonly contractAddress: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["coinId", "amount", "name", "symbol", "price", "priceBtc", "imgUrl", "pCh24h", "rank", "volume"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletBalances: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1234567890abcdef1234567890abcdef12345678"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address for which the balance is being queried. Must be a valid string representing an EVM-compatible wallet address.";
                };
                readonly networks: {
                    readonly default: "all";
                    readonly type: "string";
                    readonly examples: readonly ["ethereum,polygon,binance"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specifies the blockchain networks to query for the wallet balance. Can be a single network (e.g., \"ethereum\") or a comma-separated list of networks (e.g., \"ethereum,polygon,binance\"). If not provided, the default is \"all\" supported networks.";
                };
            };
            readonly required: readonly ["address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly chain: {
                        readonly type: "string";
                    };
                    readonly coinId: {
                        readonly type: "string";
                    };
                    readonly amount: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly symbol: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                    };
                    readonly priceBtc: {
                        readonly type: "number";
                    };
                    readonly imgUrl: {
                        readonly type: "string";
                    };
                    readonly pCh24h: {
                        readonly type: "number";
                    };
                    readonly rank: {
                        readonly type: "number";
                    };
                    readonly volume: {
                        readonly type: "number";
                    };
                    readonly decimals: {
                        readonly type: "number";
                    };
                    readonly contractAddress: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["coinId", "amount", "name", "symbol", "price", "priceBtc", "imgUrl", "pCh24h", "rank", "volume"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletSyncStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
            };
            readonly required: readonly ["address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly examples: readonly [20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-21T05:03:22.845Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly to: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-22T07:03:22.845Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Please include the date in ISO 8601 format";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly types: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma separated values of (deposit,withdraw,approve,executed,balance,fee)";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the wallet to search for.";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.";
                };
                readonly txId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "To search with transaction hash";
                };
                readonly wallets: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum:0x1234567890abcdef1234567890abcdef12345678,all:0x4567890abcdef1234567890abcdef1234567890abc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of wallet addresses in format \"connectionId:address\".";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly meta: {
                        readonly type: "object";
                        readonly properties: {
                            readonly page: {
                                readonly type: "number";
                            };
                            readonly limit: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["page", "limit"];
                    };
                    readonly result: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["deposit", "withdraw", "approve", "executed", "balance", "fee"];
                                    readonly description: "`deposit` `withdraw` `approve` `executed` `balance` `fee`";
                                };
                                readonly date: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly mainContent: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly coinIcons: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly coinAssets: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly required: readonly ["coinIcons", "coinAssets"];
                                };
                                readonly coinData: {
                                    readonly description: "Only sent if there is at least 1 coin in transactions";
                                    readonly type: "object";
                                    readonly required: readonly ["count", "symbol", "currentValue"];
                                    readonly properties: {
                                        readonly count: {
                                            readonly type: "number";
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                        };
                                        readonly currentValue: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                                readonly profitLoss: {
                                    readonly description: "Only sent if there is at least 1 coin in transactions";
                                    readonly type: "object";
                                    readonly required: readonly ["profit", "profitPercent"];
                                    readonly properties: {
                                        readonly profit: {
                                            readonly type: "number";
                                        };
                                        readonly profitPercent: {
                                            readonly type: "number";
                                        };
                                        readonly currentValue: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                                readonly transactions: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly action: {
                                                readonly type: "string";
                                            };
                                            readonly items: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly required: readonly ["action", "items"];
                                    };
                                };
                                readonly fee: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "Sent only when fee is another transaction object";
                                        };
                                        readonly coin: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly symbol: {
                                                    readonly type: "string";
                                                };
                                                readonly icon: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly required: readonly ["id", "name", "symbol", "icon"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                        };
                                        readonly totalWorth: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["coin", "count", "totalWorth"];
                                };
                                readonly hash: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                        };
                                        readonly explorerUrl: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["id", "explorerUrl"];
                                };
                            };
                            readonly required: readonly ["type", "date", "mainContent", "transactions"];
                        };
                    };
                };
                readonly required: readonly ["meta", "result"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RainbowChart: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly coinId: {
                    readonly enum: readonly ["bitcoin", "ethereum"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "CoinId of the coin to return";
                };
            };
            readonly required: readonly ["coinId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly price: {
                        readonly type: "string";
                        readonly description: "Price value";
                        readonly examples: readonly ["0.9111"];
                    };
                    readonly time: {
                        readonly type: "string";
                        readonly description: "Date in YYYY-MM-DD format";
                        readonly examples: readonly ["2010-09-30"];
                    };
                };
                readonly required: readonly ["price", "time"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransactionsSync: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly wallets: {
                readonly description: "Array of wallets to sync transactions for";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Wallet address";
                            readonly examples: readonly ["0x123456789abcdef"];
                        };
                        readonly connectionId: {
                            readonly type: "string";
                            readonly description: "The identifier of connection, which you received from /wallet/blockchains call response. Can be a specific network (e.g., \"ethereum\") or \"all\" for all connections.";
                            readonly examples: readonly ["ethereum"];
                        };
                    };
                    readonly required: readonly ["address", "connectionId"];
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet address for single wallet sync";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection for single wallet sync, which you received from /wallet/blockchains call response. Can be a single network (e.g., \"ethereum\") or a comma-separated list of networks or \"all\" for all connections.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["syncing", "synced"];
                    readonly description: "`syncing` `synced`";
                };
            };
            readonly required: readonly ["status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletChart: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of 24h, 1w, 1m, 3m, 6m, 1y, all time periods.";
                };
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1234567890abcdef1234567890abcdef12345678"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address for which the chart is being queried.";
                };
                readonly connectionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of connection, which you received from /wallet/blockchains call response.  Can be a single network (e.g., \"ethereum\") or a comma-separated list of networks or \"all\" for all connections. ";
                };
            };
            readonly required: readonly ["type", "address", "connectionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly description: "Array of data points: [TIMESTAMP, USD, BTC, ETH]";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
            };
            readonly required: readonly ["result"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of 24h, 1w, 1m, 3m, 6m, 1y, all time periods.";
                };
                readonly wallets: {
                    readonly type: "string";
                    readonly examples: readonly ["ethereum:0x1234567890abcdef1234567890abcdef12345678,polygon:0x4567890abcdef1234567890abcdef1234567890abc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of wallet addresses in format \"connectionId:address\"";
                };
                readonly aggregated: {
                    readonly default: true;
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to return aggregated data";
                };
            };
            readonly required: readonly ["type", "wallets"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly data: {
                        readonly description: "Array of data points: [TIMESTAMP, USD, BTC, ETH]";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly walletAddress: {
                        readonly type: "string";
                        readonly description: "The wallet address";
                        readonly examples: readonly ["0x1234567890abcdef1234567890abcdef12345678"];
                    };
                    readonly connectionId: {
                        readonly type: "string";
                        readonly description: "The blockchain network identifier";
                        readonly examples: readonly ["ethereum"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly description: "Error message";
                        readonly examples: readonly ["An error occurred while fetching data"];
                    };
                };
                readonly required: readonly ["data"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AddPortfolioTransaction, BtcDominance, ExchangeSyncStatus, FearAndGreed, FearAndGreedChart, GetBlockchains, GetCoinAvgPrice, GetCoinById, GetCoinChartById, GetCoinExchangePrice, GetCoins, GetCurrencies, GetExchangeBalance, GetExchangeChart, GetExchangeSyncStatus, GetExchangeTransactions, GetExchanges, GetFiatCurrencies, GetMarketCap, GetNews, GetNewsById, GetNewsByType, GetNewsSources, GetNftCollectionAssetByTokenid, GetNftCollectionAssetsByAddress, GetNftCollectionByAddress, GetNftsByWallet, GetPortfolioChart, GetPortfolioCoins, GetPortfolioTransactions, GetTickerExchanges, GetTickerMarkets, GetTrendingNfts, GetWalletBalance, GetWalletBalances, GetWalletSyncStatus, GetWalletTransactions, RainbowChart, TransactionsSync, WalletChart, WalletCharts };
