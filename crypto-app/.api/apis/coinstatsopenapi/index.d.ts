import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         Get comprehensive data about all cryptocurrencies:
     * - Price, market cap, and volume
     * - Price changes (1h, 24h, 7d)
     * - Supply information
     * - Trading metrics
     * - Social links and metadata
     *
     * Optional Parameters:
     * - currency: Price display currency (default: USD)
     * - limit & skip: Pagination controls
     * - includeRiskScore: Add risk analysis data
     * - categories: Filter by coin categories
     * - blockchains: Filter by blockchain networks
     *
     * Sorting Options:
     * - sortBy: rank, price, volume, etc.
     * - sortDir: asc or desc</hr>
     *
     */
    getCoins(metadata?: types.GetCoinsMetadataParam): Promise<FetchResponse<200, types.GetCoinsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Returns detailed information about a specific cryptocurrency using coinId. </hr>
     *
     */
    getCoinById(metadata: types.GetCoinByIdMetadataParam): Promise<FetchResponse<200, types.GetCoinByIdResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         Returns historical chart data for a specific cryptocurrency using coinId.</hr>
     *
     */
    getCoinChartById(metadata: types.GetCoinChartByIdMetadataParam): Promise<FetchResponse<200, types.GetCoinChartByIdResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         Returns the historical average price of a specific cryptocurrency for a given
     * date. </hr>
     *
     */
    getCoinAvgPrice(metadata: types.GetCoinAvgPriceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         Returns historical price data for a specific cryptocurrency on a selected
     * exchange.</hr>
     *
     */
    getCoinExchangePrice(metadata: types.GetCoinExchangePriceMetadataParam): Promise<FetchResponse<200, types.GetCoinExchangePriceResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         Returns a list of supported cryptocurrency exchanges available on
     * CoinStats.</hr>
     *
     */
    getTickerExchanges(): Promise<FetchResponse<200, types.GetTickerExchangesResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         Returns a list of tickers for a specific cryptocurrency across multiple
     * exchanges.</hr>
     *
     */
    getTickerMarkets(metadata?: types.GetTickerMarketsMetadataParam): Promise<FetchResponse<200, types.GetTickerMarketsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Returns the list of blockchains supported by CoinStats.</hr>
     *
     */
    getBlockchains(): Promise<FetchResponse<200, types.GetBlockchainsResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Get cryptocurrency balances for any blockchain wallet:
     * - Token balances across multiple networks
     * - NFT holdings
     * - Current USD values
     * - Historical transactions
     *
     * Required:
     * - address: Wallet address to query
     * - connectionId: Blockchain network(s) to check
     *   - Single network (e.g., "ethereum")
     *   - Multiple networks ("ethereum,polygon")
     *   - "all" for all supported networks
     *
     * Features:
     * - Multi-chain support
     * - ERC20 token detection
     * - NFT balance tracking
     * - Historical data access</hr>
     *
     */
    getWalletBalance(metadata: types.GetWalletBalanceMetadataParam): Promise<FetchResponse<200, types.GetWalletBalanceResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Returns the balance data for a provided wallet address across all CoinStats-EVM
     * compatible supported networks. You can choose to query individual networks or all
     * available networks at a fixed cost of 400 credits. Each network query costs 40
     * credits.</hr>
     *
     */
    getWalletBalances(metadata: types.GetWalletBalancesMetadataParam): Promise<FetchResponse<200, types.GetWalletBalancesResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         Returns the syncing status of the provided wallet address with the blockchain
     * network.</hr>
     *
     */
    getWalletSyncStatus(metadata: types.GetWalletSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetWalletSyncStatusResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Returns transaction data for wallet addresses. Supports two formats:
     * Two ways to use:
     * 1. Single wallet: provide address and connectionId separately
     * 2. Multiple wallets: provide wallets parameter in format
     * "connectionId:address,connectionId:address"
     * Cost per network: 40 credits.
     * Selecting "all" networks for a wallet costs 400 credits.</hr>
     *
     */
    getWalletTransactions(metadata?: types.GetWalletTransactionsMetadataParam): Promise<FetchResponse<200, types.GetWalletTransactionsResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Initiates the syncing process to update transaction data.
     * Two ways to use:
     * 1. For a single wallet: provide query parameters { address: "0x123...", connectionId:
     * "ethereum" }.
     * 2. For multiple wallets: provide a body with { wallets: [{ address: "0x123...",
     * connectionId: "ethereum" }] }.
     * Cost per network: 50 credits.
     * Selecting "all" networks for a wallet costs 500 credits.</hr>
     *
     */
    transactionsSync(body: types.TransactionsSyncBodyParam, metadata?: types.TransactionsSyncMetadataParam): Promise<FetchResponse<200, types.TransactionsSyncResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Cost per network: 40 credits. Selecting all networks: 400 credits. "Returns
     * wallet chart data for specific time ranges displayed on the CoinStats website.
     * Note: Make sure transactions are synced first by calling PATCH /transactions to retrieve
     * accurate chart data."</hr>
     *
     */
    walletChart(metadata: types.WalletChartMetadataParam): Promise<FetchResponse<200, types.WalletChartResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Provides chart data for multiple wallet addresses across various networks. Each
     * wallet-network combination incurs a cost of 40 credits. Choosing "all" networks for a
     * wallet costs 400 credits per wallet. For instance,
     * "ethereum:0x1234..,all:0x5678..,all:0x9012.." results in a cost of 1 x 40 + 2 x 400
     * credits. The response includes data for each wallet individually and aggregated totals
     * if requested.</hr>
     *
     */
    walletCharts(metadata: types.WalletChartsMetadataParam): Promise<FetchResponse<200, types.WalletChartsResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Returns a list of exchange portfolio connections supported by CoinStats.</hr>
     *
     */
    getExchanges(): Promise<FetchResponse<200, types.GetExchangesResponse200>>;
    /**
     * <b> 10 credits per request </b>
     *             <hr>
     *         Get your cryptocurrency exchange balances:
     * - Real-time balance information
     * - All coins and tokens in your account
     * - Current value in USD and BTC
     * - Available and locked amounts
     *
     * Required:
     * - connectionId: Exchange identifier (e.g., "binance", "coinbase")
     * - connectionFields: Exchange API credentials
     *   - apiKey: Your exchange API key
     *   - apiSecret: Your exchange API secret
     *
     * Security Note:
     * - Use read-only API keys when possible
     * - Keep your API credentials secure
     * - Enable IP restrictions on exchange side</hr>
     *
     */
    getExchangeBalance(body: types.GetExchangeBalanceBodyParam): Promise<FetchResponse<200, types.GetExchangeBalanceResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         Returns the syncing status of the exchange portfolio, indicating whether the
     * portfolio is fully synced with the exchange or still in progress.</hr>
     *
     */
    getExchangeSyncStatus(metadata: types.GetExchangeSyncStatusMetadataParam): Promise<FetchResponse<200, types.GetExchangeSyncStatusResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         Returns transaction data for a specific exchange by portfolioId.
     * Note: Make sure the exchange is synced first by calling  PATCH /sync for up to date
     * infromation.</hr>
     *
     */
    getExchangeTransactions(metadata: types.GetExchangeTransactionsMetadataParam): Promise<FetchResponse<200, types.GetExchangeTransactionsResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Returns exchange chart data for specific time ranges displayed on the CoinStats
     * website.
     * Note: Make sure the exchange is synced first by calling  PATCH /sync for up to date
     * infromation.</hr>
     *
     */
    getExchangeChart(metadata: types.GetExchangeChartMetadataParam): Promise<FetchResponse<200, types.GetExchangeChartResponse200>>;
    /**
     * <b> 20 credits per request </b>
     *             <hr>
     *         Initiates the syncing process for the given exchange portfolio by
     * portfolioId.</hr>
     *
     */
    exchangeSyncStatus(metadata: types.ExchangeSyncStatusMetadataParam): Promise<FetchResponse<200, types.ExchangeSyncStatusResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Get detailed information about fiat currencies:
     * - Complete list of supported fiat currencies
     * - Current exchange rates
     * - Currency symbols and names
     * - Associated images/icons
     *
     * Use this data to:
     * - Convert cryptocurrency values to fiat
     * - Display fiat currency information
     * - Access currency metadata</hr>
     *
     */
    getFiatCurrencies(): Promise<FetchResponse<200, types.GetFiatCurrenciesResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         Get the most popular NFT collections right now:
     * - Top trending collections by volume and activity
     * - Floor prices and market caps
     * - Collection statistics and metadata
     * - Trading volume and price trends
     *
     * Results are sorted by:
     * - Recent sales volume
     * - Market activity
     * - Social engagement
     * - Price movement</hr>
     *
     */
    getTrendingNfts(metadata?: types.GetTrendingNftsMetadataParam): Promise<FetchResponse<200, types.GetTrendingNftsResponse200>>;
    /**
     * <b> 40 credits per request </b>
     *             <hr>
     *         Returns a list of NFT assets owned by a wallet address.</hr>
     *
     */
    getNftsByWallet(metadata: types.GetNftsByWalletMetadataParam): Promise<FetchResponse<200, types.GetNftsByWalletResponse200>>;
    /**
     * <b> 3 credits per request </b>
     *             <hr>
     *         Returns detailed information about an NFT collection using
     * collectionAddress.</hr>
     *
     */
    getNftCollectionByAddress(metadata: types.GetNftCollectionByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionByAddressResponse200>>;
    /**
     * <b> 8 credits per request </b>
     *             <hr>
     *         Returns the list of NFT assets associated with NFT Collection by
     * collectionAddress.</hr>
     *
     */
    getNftCollectionAssetsByAddress(metadata: types.GetNftCollectionAssetsByAddressMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetsByAddressResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         Returns detailed information about a specific NFT asset.</hr>
     *
     */
    getNftCollectionAssetByTokenid(metadata: types.GetNftCollectionAssetByTokenidMetadataParam): Promise<FetchResponse<200, types.GetNftCollectionAssetByTokenidResponse200>>;
    /**
     * <b> 2 credits per request </b>
     *             <hr>
     *         Returns the list of news sources.</hr>
     *
     */
    getNewsSources(): Promise<FetchResponse<200, types.GetNewsSourcesResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         Returns the list of cryptocurrency news articles with pagination.</hr>
     *
     */
    getNews(metadata?: types.GetNewsMetadataParam): Promise<FetchResponse<200, types.GetNewsResponse200>>;
    /**
     * <b> 5 credits per request </b>
     *             <hr>
     *         Returns cryptocurrency news articles based on a specific type.</hr>
     *
     */
    getNewsByType(metadata: types.GetNewsByTypeMetadataParam): Promise<FetchResponse<200, types.GetNewsByTypeResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Returns a news article by id.</hr>
     *
     */
    getNewsById(metadata: types.GetNewsByIdMetadataParam): Promise<FetchResponse<200, types.GetNewsByIdResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Get current global cryptocurrency market data:
     * - Total market capitalization
     * - 24h trading volume
     * - Bitcoin dominance
     * - Market trends and indicators
     *
     * This data provides a high-level overview of the entire crypto market's current
     * state.</hr>
     *
     */
    getMarketCap(): Promise<FetchResponse<200, types.GetMarketCapResponse200>>;
    /**
     * <b> 8 credits per request </b>
     *             <hr>
     *         Get detailed information about all coins in your portfolio, including:
     * - Current holdings and their USD value
     * - Profit/Loss (PnL) information
     * - Performance metrics and statistics
     * - Risk assessment scores (optional)
     *
     * Required:
     * - shareToken: Get this from your CoinStats portfolio page by clicking "Share" and
     * copying the token from the share URL
     *
     * Optional Parameters:
     * - skip & limit: Control the number of results per page
     * - includeRiskScore: Set to "true" to include risk metrics
     *
     * Note: This endpoint is only available for users with a Degen plan subscription.</hr>
     *
     */
    getPortfolioCoins(metadata: types.GetPortfolioCoinsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioCoinsResponse200>>;
    /**
     * <b> 10 credits per request </b>
     *             <hr>
     *         Get historical performance data to visualize your portfolio's growth over time:
     * - Total portfolio value at different time points
     * - Performance metrics for various time ranges
     * - Historical Profit/Loss (PnL) data
     *
     * Required:
     * - shareToken: Get this from your CoinStats portfolio page by clicking "Share" and
     * copying the token from the share URL
     *
     * Optional:
     * - type: Specify the time range for the chart data (e.g., "24h", "1w", "1m", "1y")
     *
     * Note: This endpoint is only available for users with a Degen plan subscription.</hr>
     *
     */
    getPortfolioChart(metadata: types.GetPortfolioChartMetadataParam): Promise<FetchResponse<200, types.GetPortfolioChartResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         Get a detailed history of all transactions in your portfolio:
     * - Complete list of buy/sell operations
     * - Transaction dates and amounts
     * - Price information at time of transaction
     * - Supports pagination for viewing large transaction sets
     *
     * Required:
     * - shareToken: Get this from your CoinStats portfolio page by clicking "Share" and
     * copying the token from the share URL
     *
     * Optional:
     * - skip & limit: Control the number of transactions per page
     * - currency: Specify the currency for price values
     * - from & to: Filter transactions by date range
     *
     * Note: This endpoint is only available for users with a Degen plan subscription.</hr>
     *
     */
    getPortfolioTransactions(metadata: types.GetPortfolioTransactionsMetadataParam): Promise<FetchResponse<200, types.GetPortfolioTransactionsResponse200>>;
    /**
     * <b> 4 credits per request </b>
     *             <hr>
     *         Add a new transaction to your manual portfolio:
     * - Support for buy, sell, and transfer operations
     * - Automatically updates your portfolio holdings
     * - Validates transaction data before recording
     * - Returns the details of the created transaction
     *
     * Required:
     * - shareToken: Get this from your CoinStats portfolio page
     * - Transaction details in request body:
     *   - coinId: The cryptocurrency's identifier
     *   - count: Amount (negative for sells)
     *   - date: Transaction timestamp (optional)
     *   - price: Price at time of transaction (optional)
     *
     * Optional:
     * - notes: Add personal notes to the transaction
     * - currency: Specify currency for price (default: USD)
     *
     * Note: This endpoint is only available for users with a Degen plan subscription.</hr>
     *
     */
    addPortfolioTransaction(body: types.AddPortfolioTransactionBodyParam, metadata: types.AddPortfolioTransactionMetadataParam): Promise<FetchResponse<200, types.AddPortfolioTransactionResponse200>>;
    /**
     * <b> 1 credits per request </b>
     *             <hr>
     *         Get a complete list of supported fiat currencies:
     * - Returns all currencies supported by CoinStats
     * - Includes currency codes and exchange rates
     * - Use these currency codes in other API endpoints
     *
     * Example Response:
     * - USD: US Dollar
     * - EUR: Euro
     * - GBP: British Pound
     * - And many more...</hr>
     *
     */
    getCurrencies(): Promise<FetchResponse<200, types.GetCurrenciesResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Returns Bitcoin market dominance data showing BTC's percentage share of the
     * total cryptocurrency market capitalization over a specified time period. Supports
     * multiple time frames: 24 hours, 1 week, 1 month, 3 months, 6 months, 1 year, or all
     * available data. Data is returned as pairs of [timestamp, percentage] values. Useful for
     * analyzing market trends and Bitcoin's relative strength in the overall crypto
     * ecosystem.</hr>
     *
     */
    btcDominance(metadata: types.BtcDominanceMetadataParam): Promise<FetchResponse<200, types.BtcDominanceResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Provides the Crypto Fear & Greed Index which measures market sentiment from 0
     * (Extreme Fear) to 100 (Extreme Greed). This indicator aggregates multiple factors
     * including volatility, market momentum, social media, and surveys to gauge investor
     * emotional state. Helps identify potential market tops (greed) and bottoms (fear).</hr>
     *
     */
    fearAndGreed(): Promise<FetchResponse<200, types.FearAndGreedResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Returns historical data for the Crypto Fear & Greed Index. The data includes
     * daily values over time with timestamps, numerical values (0-100), and classifications
     * (Extreme Fear, Fear, Neutral, Greed, Extreme Greed). This historical view helps track
     * market sentiment trends and identify potential correlation with price movements.</hr>
     *
     */
    fearAndGreedChart(): Promise<FetchResponse<200, types.FearAndGreedChartResponse200>>;
    /**
     * <b> 50 credits per request </b>
     *             <hr>
     *         Returns Rainbow Chart data for either Bitcoin or Ethereum based on the 'coinId'
     * parameter (use 'bitcoin' or 'ethereum'). The Rainbow Chart shows historical price data
     * over time, which can be visualized with color bands representing different market
     * sentiment zones. Returns an array of data points with price and time values.</hr>
     *
     */
    rainbowChart(metadata: types.RainbowChartMetadataParam): Promise<FetchResponse<200, types.RainbowChartResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
