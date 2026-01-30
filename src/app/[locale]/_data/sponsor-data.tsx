import { CDN_LINK } from "../constants";
import {
  TierProps,
  useDiamond,
  useGold,
  useSilver,
  useUltimate,
} from "./sponsor-tiers-data";

export type SponsorData = {
  name: string;
  logoPath: string;
  websiteLink: string;
  tier: TierProps;
};

export const useSponsorList = (): SponsorData[] => {
  const silver = useSilver();
  const gold = useGold();
  const diamond = useDiamond();
  const ultimate = useUltimate();

  return [
    {
      name: "Micromet",
      logoPath: CDN_LINK + "/website/support-us/sponsors/micromet.webp",
      websiteLink: "https://www.micromet.ro/",
      tier: ultimate,
    },
    {
      name: "UMB Grup",
      logoPath: CDN_LINK + "/website/support-us/sponsors/umb.webp",
      websiteLink: "https://www.facebook.com/p/UMB-GRUP-100063895189860/",
      tier: ultimate,
    },
    {
      name: "Rikora",
      logoPath: CDN_LINK + "/website/support-us/sponsors/rikora.webp",
      websiteLink: "https://rikora.net/",
      tier: ultimate,
    },
    {
      name: "Autovip",
      logoPath: CDN_LINK + "/website/support-us/sponsors/autovip.webp",
      websiteLink: "https://autoviptransfer.ro/",
      tier: diamond,
    },
    {
      name: "Fundatia Fan Courier",
      logoPath: CDN_LINK + "/website/support-us/sponsors/fundatia-fan.webp",
      websiteLink: "https://fundatiafancourier.ro/",
      tier: diamond,
    },
    {
      name: "Remat Holding",
      logoPath: CDN_LINK + "/website/support-us/sponsors/remat.webp",
      websiteLink: "https://rematholding.ro/",
      tier: diamond,
    },
    {
      name: "Vrancart Group",
      logoPath: CDN_LINK + "/website/support-us/sponsors/vrancart.webp",
      websiteLink: "https://vrancart.ro/",
      tier: diamond,
    },
    {
      name: "Roman's",
      logoPath: CDN_LINK + "/website/support-us/sponsors/romans.webp",
      websiteLink: "https://romans.ro/",
      tier: diamond,
    },
    {
      name: "Paco Supermarket ",
      logoPath: CDN_LINK + "/website/support-us/sponsors/paco.webp",
      websiteLink: "https://pacomarket.ro/",
      tier: diamond,
    },
    {
      name: "Aviputna",
      logoPath: CDN_LINK + "/website/support-us/sponsors/aviputna.webp",
      websiteLink: "https://aviputna.ro/",
      tier: gold,
    },
    {
      name: "Banca Transilvania",
      logoPath:
        CDN_LINK + "/website/support-us/sponsors/banca-transilvania.webp",
      websiteLink: "https://www.bancatransilvania.ro/",
      tier: gold,
    },
    {
      name: "Reina Bijou",
      logoPath: CDN_LINK + "/website/support-us/sponsors/reina.webp",
      websiteLink: "http://www.reinabijou.ro/",
      tier: gold,
    },
    {
      name: "Zaga Zaga",
      logoPath: CDN_LINK + "/website/support-us/sponsors/zaga-zaga.webp",
      websiteLink: "https://zagazaga.ro/",
      tier: gold,
    },
    {
      name: "Idna Power",
      logoPath: CDN_LINK + "/website/support-us/sponsors/idna-power.webp",
      websiteLink: "https://idnasolarpower.ro/",
      tier: gold,
    },
    {
      name: "Arcmode",
      logoPath: CDN_LINK + "/website/support-us/sponsors/arcmode.webp",
      websiteLink: "https://marmura-granit-focsani.ro/",
      tier: gold,
    },
    {
      name: "DeepServ",
      logoPath: CDN_LINK + "/website/support-us/sponsors/deepserv.webp",
      websiteLink: "https://deep-serv.ro",
      tier: gold,
    },
    {
      name: "Allvet",
      logoPath: CDN_LINK + "/website/support-us/sponsors/allvet.webp",
      websiteLink: "http://allvet.ro/",
      tier: silver,
    },
    {
      name: "Diacarn",
      logoPath: CDN_LINK + "/website/support-us/sponsors/diacarn.webp",
      websiteLink: "https://diacarnfood.ro/",
      tier: silver,
    },
    {
      name: "Rix Rooms",
      logoPath: CDN_LINK + "/website/support-us/sponsors/rixrooms.webp",
      websiteLink: "https://rixrooms.ro/",
      tier: silver,
    },
    {
      name: "Dentexcel",
      logoPath: CDN_LINK + "/website/support-us/sponsors/dentexcel.webp",
      websiteLink: "https://www.hyperclinicadentexcel.ro/",
      tier: silver,
    },
    {
      name: "Dentrust",
      logoPath: CDN_LINK + "/website/support-us/sponsors/dentrust.webp",
      websiteLink: "https://dentrust.ro/",
      tier: silver,
    },
    {
      name: "Edil Dan Construct",
      logoPath:
        CDN_LINK + "/website/support-us/sponsors/edil-dan-construct.webp",
      websiteLink: "https://g.co/kgs/RJKxLfy",
      tier: silver,
    },
    {
      name: "Ceproinv",
      logoPath: CDN_LINK + "/website/support-us/sponsors/ceproinv.webp",
      websiteLink: "https://www.ceproinv.ro/",
      tier: silver,
    },
    {
      name: "DataHost",
      logoPath: CDN_LINK + "/website/support-us/sponsors/datahost.webp",
      websiteLink: "https://www.datahost.ro/",
      tier: silver,
    },
  ];
};
