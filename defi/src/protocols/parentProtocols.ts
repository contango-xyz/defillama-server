import { baseIconsUrl } from "../constants";
import type { IParentProtocol } from "./types";

/*
    leave `chains` and `category` as an empty array because we fill them based on their child protocols chains and category in api response
*/

const parentProtocols: IParentProtocol[] = [
  {
    id: "AAVE",
    name: "AAVE",
    url: "https://aave.com\r\n",
    description:
      "Aave is an Open Source and Non-Custodial protocol to earn interest on deposits and borrow assets",
    logo: `${baseIconsUrl}/aave-v2.png`,
    chains: [],
    gecko_id: "aave",
    cmcId: "7278",
    twitter: "AaveAave",
  },
  {
    id: "Sushi",
    name: "Sushi",
    url: "https://sushi.com/",
    description:
      "A fully decentralized protocol for automated liquidity provision on Ethereum.\r\n",
    logo: `${baseIconsUrl}/sushi.jpg`,
    gecko_id: "sushi",
    cmcId: "6758",
    chains: [],
    twitter: "SushiSwap",
  },
  {
    id: "SUN.io",
    name: "SUN",
    url: "https://sun.io",
    description:
      "First integrated platform for stablecoin swap, stake-mining, and self-governance on TRON",
    logo: `${baseIconsUrl}/sun.jpg`,
    gecko_id: "sun-token",
    cmcId: "10529",
    chains: [],
    twitter: "defi_sunio",
  },
  {
    id: "Benqi",
    name: "Benqi",
    url: "https://benqi.fi",
    description:
      "BENQI is a non-custodial liquidity market protocol, built on Avalanche. The protocol enables users to effortlessly lend, borrow, and earn interest with their digital assets.",
    logo: `${baseIconsUrl}/benqi-lending.jpg`,
    gecko_id: "benqi",
    cmcId: "9288",
    chains: [],
    twitter: "BenqiFinance",
  },
  {
    id: "incrementFinance",
    name: "Increment Finance",
    url: "https://increment.fi",
    description:
      "Increment Finance, One-stop DeFi Platform on Flow Blockchain.",
    logo: `${baseIconsUrl}/increment-lending.png`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "incrementfi",
  },
  {
    id: "podsFinance",
    name: "Pods",
    url: "https://www.pods.finance/",
    description:
      "Buliding DeFi, Strategies, primitives and tooling. Welcome to Pods.",
    logo: `${baseIconsUrl}/pods-finance.jpg`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "PodsFinance",
  },
  {
    id: "ApeSwap",
    name: "ApeSwap",
    url: "https://apeswap.finance",
    description:
      "ApeSwap is a Decentralized Autonomous Organization (DAO) that offers a full suite of tools to explore and engage with decentralized finance opportunities. Using the products within our DeFi Hub, users and partners can tap into this new wave of financial innovation in a secure, transparent, and globally accessible way",
    logo: `${baseIconsUrl}/apeswap.png`,
    gecko_id: "apeswap-finance",
    cmcId: "8497",
    chains: [],
    twitter: "ape_swap",
  },
  {
    id: "Parallel DeFi Super App",
    name: "Parallel DeFi Super App",
    url: "https://parallel.fi",
    description:
    "Parallel Finance is a Decentralized Money Market Protocol that offers lending, staking, and borrowing in the Polkadot ecosystem. Depositors can lend and stake simultaneously to earn double yield on their staked coins, and borrowers can collateralize to borrow.",
    logo: `${baseIconsUrl}/parallel-defi-super-app.jpg`,
    gecko_id: null ,
    cmcId: null,
    chains: [],
    twitter: "ParallelFi",
  },
  {
    id: "Value Finance",
    name: "Value Finance",
    url: "https://valuedefi.io",
    description:
    "The Value DeFi protocol is a platform and suite of products that aim to bring fairness, true value, and innovation to Decentralized Finance.`",
    logo: `${baseIconsUrl}/value finance.png`,
    gecko_id: "value-liquidity" ,
    cmcId: "1183",
    chains: [],
    twitter: "value_defi",
  },
  {
    id: "Magik Finance",
    name: "Magik Finance",
    url: "https://magik.finance/",
    description:
    "Yield Optimization as a Service and Algorithmic token pegged to $FTM on the Fantom Opera network.",
    logo: `${baseIconsUrl}/magik-finance.png`,
    gecko_id: "magik",
    cmcId: "17941",
    chains: [],
    twitter: "MagikDotFinance",
  },
  {
    id: "Huckleberry",
    name: "Huckleberry",
    url: "https://www.huckleberry.finance/",
    description:
    "Huckleberry is a community driven AMM crosschain DEX and lendin' platform built on Moonriver and CLV.",
    logo: `${baseIconsUrl}/huckleberry.png`,
    gecko_id: "huckleberry",
    cmcId: "12922",
    chains: [],
    twitter: "HuckleberryDEX",
  },
  {
    id: "MM Finance",
    name: "MM Finance",
    url: "https://linktr.ee/madmeerkat",
    description:
    "DeFi Ecosystem on Cronos and AMM on Polygon",
    logo: `${baseIconsUrl}/mm-finance.jpg`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "MMFcrypto",
  },
  {
    id: "Mycelium",
    name: "Mycelium",
    url: "https://mycelium.xyz",
    description:
    "Previously Tracer DAO. Trade with liquidity, leverage and low fees.",
    logo: `${baseIconsUrl}/mycelium.jpg`,
    gecko_id: "mycelium",
    cmcId: "21437",
    chains: [],
    twitter: "mycelium_xyz",
  },
  {
    id: "Bancor",
    name: "Bancor",
    url: "https://app.bancor.network/",
    description:
    "Bancor is an on-chain liquidity protocol that enables automated, decentralized exchange on Ethereum and across blockchains.",
    logo: `${baseIconsUrl}/bancor.png`,
    gecko_id: "bancor",
    cmcId: "1727",
    chains: [],
    twitter: "Bancor",
  },
  {
    id: "SpiritSwap",
    name: "SpiritSwap",
    url: "https://app.spiritswap.finance/#/",
    description:
      "AMM and Lending protocol on Fantom",
    logo: `${baseIconsUrl}/spiritswap.jpg`,
    gecko_id: "spiritswap",
    cmcId: "1359",
    chains: [],
    twitter: "Spirit_Swap",
  },
  {
    id: "Interlay",
    name: "Interlay",
    url: "https://interlay.io/",
    description:
      "Fully trustless and decentralized Bitcoin bridge and BTC DeFi hub",
    logo: `${baseIconsUrl}/interlay.png`,
    gecko_id: "interlay",
    cmcId: "20366",
    chains: [],
    twitter: "InterlayHQ",
  },
  {
    id: "Frax Finance",
    name: "Frax Finance",
    url: "https://frax.finance/",
    description:
      "Inventors of the fractional stablecoin. $FRAX is the 1st stablecoin with parts backed & parts algorithmic",
    logo: `${baseIconsUrl}/frax finance.png`,
    gecko_id: "frax-share",
    cmcId: "6953",
    chains: [],
    twitter: "fraxfinance",
  },
  {
    id: "Compound Finance",
    name: "Compound Finance",
    url: "https://compound.finance/",
    description:
      "Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.",
    logo: `${baseIconsUrl}/compound finance.jpg`,
    gecko_id: "compound-governance-token",
    cmcId: "5692",
    chains: [],
    twitter: "compoundfinance",
  },
  {
    id: "Algofi",
    name: "Algofi",
    url: "https://www.algofi.org/",
    description:
      "Algofi is the DeFi hub built on Algorand. Earn interest, borrow, swap and more on the Algofi lending protocol, DEX, and stablecoin. Further, access liquidity against your governance ALGOs through the Algofi Vault.",
    logo: `${baseIconsUrl}/algofi.jpg`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "algofiorg",
  },
  {
    id: "Redacted",
    name: "Redacted",
    url: "https://redacted.finance",
    description:
      "The Redacted ecosystem is a product suite of smart contracts empowering on-chain liquidity, governance, and cash flow for DeFi protocols.",
    logo: `${baseIconsUrl}/redacted.png`,
    gecko_id: "redacted",
    cmcId: "21324",
    chains: [],
    twitter: "redactedcartel",
  },
  {
    id: "Tomb Finance",
    name: "Tomb Finance",
    url: "https://tomb.finance/",
    description:
      "home to the first algorithmic token pegged to $FTM on the Fantom Opera network",
    logo: `${baseIconsUrl}/tomb-finance.jpg`,
    gecko_id: "tomb",
    cmcId: "11495",
    chains: [],
    twitter: "tombfinance",
  },
  {
    id: "Volt Finance",
    name: "Volt Finance",
    url: "https://voltswap.finance",
    description:
      "VoltSwap is the first major DEX in the Meter ecosystem",
    logo: `${baseIconsUrl}/volt finance.png`,
    gecko_id: "voltswap",
    cmcId: "19160",
    chains: [],
    twitter: "Meter_IO",
  },
  {
    id: "Based Finance",
    name: "Based Finance",
    url: "https://next-gen.basedfinance.io/",
    description:
      "An innovative fork of tomb.finance, pegged to the price of 1 TOMB via seigniorage.",
    logo: `${baseIconsUrl}/based finance.png`,
    gecko_id: "based-finance",
    cmcId: "17954",
    chains: [],
    twitter: "BasedDEFI",
  },
  {
    id: "Ribbon Finance",
    name: "Ribbon Finance",
    url: "https://www.ribbon.finance/",
    description:
      "Structured products protocol",
    logo: `${baseIconsUrl}/ribbon-finance.png`,
    gecko_id: "ribbon-finance",
    cmcId: "12387",
    chains: [],
    twitter: "ribbonfinance",
  },
  {
    id: "Planet",
    name: "Planet",
    url: "https://app.planet.finance/",
    description:
      "Planet is a decentralized financial protocol consisting of different planets, each their own application, designed to enable anyone to freely activate their capital.",
    logo: `${baseIconsUrl}/planet.png`,
    gecko_id: "planet-finance",
    cmcId: "10023",
    chains: [],
    twitter: "planet_finance",
  },
  {
    id: "DAO Maker",
    name: "DAO Maker",
    url: "https://daomaker.com/",
    description:
      "DAO Maker creates growth technologies and funding frameworks for startups, while simultaneously reducing risks for investors.",
    logo: `${baseIconsUrl}/dao-maker.jpg`,
    gecko_id: "dao-maker",
    cmcId: "8420",
    chains: [],
    twitter: "TheDaoMaker",
  },
  {
    id: "Morpho",
    name: "Morpho",
    url: "https://www.morpho.xyz",
    description:
      "Morpho is an on-chain peer-to-peer layer on top of lending pools. Rates are seamlessly improved for borrowers and lenders while preserving the same guarantees.",
    logo: `${baseIconsUrl}/morpho.png`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "MorphoLabs",
  },
  {
    id: "Quickswap",
    name: "Quickswap",
    url: "https://quickswap.exchange",
    description:
      "QuickSwap is a next-gen DEX and Lending for DeFi.",
    logo: `${baseIconsUrl}/quickswap.jpg`,
    gecko_id: "quickswap",
    cmcId: "19966",
    chains: [],
    twitter: "QuickswapDEX",
  },
  {
    id: "iZUMI Finance",
    name: "iZUMI Finance",
    url: "https://izumi.finance/home",
    description:
      "Liquidity Redefined - A multi-chain DeFi protocol providing One-Stop Liquidity as a Service (LaaS).",
    logo: `${baseIconsUrl}/izumi finance.png`,
    gecko_id: "izumi-finance",
    cmcId: "16305",
    chains: [],
    twitter: "izumi_Finance",
  },
  {
    id: "Temple DAO",
    name: "Temple DAO",
    url: "https://www.templedao.link",
    description:
      "The TempleDAO protocol aims to provide DeFi users with a safe haven where they can be sheltered from crypto market volatility while benefiting from a set of investment opportunities offering high yields and steady price appreciation",
    logo: `${baseIconsUrl}/temple-dao.png`,
    gecko_id: "temple",
    cmcId: "16052",
    chains: [],
    twitter: "templedao",
  },
  {
    id: "Trader Joe",
    name: "Trader Joe",
    url: "https://www.traderjoexyz.com",
    description:
      "Trader Joe is your one-stop decentralized trading platform on the Avalanche network.",
    logo: `${baseIconsUrl}/trader-joe.png`,
    gecko_id: "joe",
    cmcId: "11396",
    chains: [],
    twitter: "traderjoe_xyz",
  },
  {
    id: "handle finance",
    name: "handle finance",
    url: "https://handle.fi",
    description:
      "the global defi FX protocol. borrow, convert & trade multi-currency #stablecoins.",
    logo: `${baseIconsUrl}/handle finance.jpg`,
    gecko_id: "handle-fi",
    cmcId: "11794",
    chains: [],
    twitter: "handle_fi",
  },
  {
    id: "Omnidex",
    name: "Omnidex",
    url: "https://omnidex.finance",
    description:
      "OmniDex is building a comprehensive decentralized trading platform on the Telos Blockchain.",
    logo: `${baseIconsUrl}/omnidex.jpg`,
    gecko_id: "omnidex",
    cmcId: null,
    chains: [],
    twitter: "OmniDex1",
  },
  {
    id: "Amulet",
    name: "Amulet",
    url: "https://amulet.org",
    description:
      "Amulet has designed an innovative and open risk protection model which not only effectively addresses the common challenges of existing decentralized RPPs, but also creates a new paradigm shift for the whole risk protection sector.",
    logo: `${baseIconsUrl}/amulet.jpg`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "AmuletProtocol",
  },
  {
    id: "Uniswap",
    name: "Uniswap",
    url: "https://uniswap.org/",
    description:
      "Swap, earn, and build on the leading decentralized crypto trading protocol.",
    logo: `${baseIconsUrl}/uniswap.png`,
    gecko_id: "uniswap",
    cmcId: "7083",
    chains: [],
    twitter: "Uniswap",
  },
  {
    id: "Tetu",
    name: "Tetu",
    url: "http://tetu.io",
    description:
      "Tetu is a decentralized organization committed to providing a next generation yield aggregator to DeFi investors. The Tetu core team has deep industry knowledge building back-end international banking systems and development with leading global payment processing infrastructure.",
    logo: `${baseIconsUrl}/tetu.svg`,
    gecko_id: "tetu",
    cmcId: "12452",
    chains: [],
    twitter: "tetu_io",
  },
  {
    id: "Pando",
    name: "Pando",
    url: "https://pando.im",
    description:
      "Pando is a set of open financial protocols which includes 3 major protocols: 1.Pando Lake/4swap: a decentralized protocol for automated liquidity provision built with the Mixin Trusted Group. 2.Pando Leaf: a decentralized financial network to minting stablecoins. 3.Pando Rings: a decentralized protocol where you can lend or borrow cryptocurrencies",
    logo: `${baseIconsUrl}/pando.png`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "pando_im",
  },
  {
    id: "Mercurial Fi",
    name: "Mercurial Fi",
    url: "https://www.mercurial.finance/about",
    description:
      "Building DeFi's first dynamic yield infrastructure on Solana",
    logo: `${baseIconsUrl}/mercurial fi.jpg`,
    gecko_id: "mercurial",
    cmcId: "9549",
    chains: [],
    twitter: "MercurialFi",
  },
  {
    id: "Folks Finance",
    name: "Folks Finance",
    url: "https://folks.finance/",
    description:
    "Lending and borrowing protocol with innovative features and Liquid Staking built on Algorand Blockchain.",
    logo: `${baseIconsUrl}/folks-finance.png`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "FolksFinance",
  },
  {
    id: "Yield Yak",
    name: "Yield Yak",
    url: "https://yieldyak.com",
    description:
    "Yield Yak provides tools for DeFi users on Avalanche. Discover a huge selection of autocompounding farms and make your life easier.",
    logo: `${baseIconsUrl}/yield yak.png`,
    gecko_id: "yield-yak",
    cmcId: "11415",
    chains: [],
    twitter: "yieldyak_",
  },
  {
    id: "Animal Farm",
    name: "Animal Farm",
    url: "https://animalfarm.app",
    description:
    "Our vision is to make traditional finance tools, typically only reserved for the super wealthy, available to the anyone by using decentralized protocols which are not limited by the gatekeeping of centralized institutions. All of our products utilize trustless models that allow users to take full ownership of their personal finances. Lending and yield aggregating is the main focus of Animal Farm, but unlike other platforms Animal Farm is the only true decentralized ownership lending and yield aggregating platform.",
    logo: `${baseIconsUrl}/animal farm.png`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "DRIPcommunity",
  },
  {
    id: "Metavault",
    name: "Metavault",
    url: "https://metavault.org/",
    description:
    "Metavault is a blockchain-based, community governed investment platform and decentralized venture capital fund. It allows anyone to participate in the latest and most profitable DeFi projects and strategies and deploys a in-house development team for project incubation.",
    logo: `${baseIconsUrl}/metavault.jpg`,
    gecko_id: null,
    cmcId: null,
    chains: [],
    twitter: "MetavaultDAO",
  },
];

export default parentProtocols;
