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
      logoPath: "/assets/support-us/sponsors/micromet.webp",
      websiteLink: "https://www.micromet.ro/",
      tier: ultimate,
    },
    {
      name: "UMB Grup",
      logoPath: "/assets/support-us/sponsors/umb.webp",
      websiteLink: "https://www.facebook.com/p/UMB-GRUP-100063895189860/",
      tier: ultimate,
    },
    {
      name: "Rikora",
      logoPath: "/assets/support-us/sponsors/rikora.webp",
      websiteLink: "https://rikora.net/",
      tier: ultimate,
    },
    {
      name: "Autovip",
      logoPath: "/assets/support-us/sponsors/autovip.webp",
      websiteLink: "https://autoviptransfer.ro/",
      tier: diamond,
    },
    {
      name: "Fundatia Fan Courier",
      logoPath: "/assets/support-us/sponsors/fundatia_fan.webp",
      websiteLink: "https://fundatiafancourier.ro/",
      tier: diamond,
    },
    {
      name: "Remat Holding",
      logoPath: "/assets/support-us/sponsors/remat.webp",
      websiteLink: "https://rematholding.ro/",
      tier: diamond,
    },
    {
      name: "Vrancart Group",
      logoPath: "/assets/support-us/sponsors/vrancart.webp",
      websiteLink: "https://vrancart.ro/",
      tier: diamond,
    },
    {
      name: "Roman's",
      logoPath: "/assets/support-us/sponsors/romans.webp",
      websiteLink: "https://romans.ro/",
      tier: diamond,
    },
    {
      name: "Paco Supermarket ",
      logoPath: "/assets/support-us/sponsors/paco.webp",
      websiteLink: "https://pacomarket.ro/",
      tier: diamond,
    },
    {
      name: "Aviputna",
      logoPath: "/assets/support-us/sponsors/aviputna.webp",
      websiteLink: "https://aviputna.ro/",
      tier: gold,
    },
    {
      name: "Banca Transilvania",
      logoPath: "/assets/support-us/sponsors/banca-transilvania.webp",
      websiteLink: "https://www.bancatransilvania.ro/",
      tier: gold,
    },
    {
      name: "Reina Bijou",
      logoPath: "/assets/support-us/sponsors/reina.webp",
      websiteLink: "http://www.reinabijou.ro/",
      tier: gold,
    },
    {
      name: "Zaga Zaga",
      logoPath: "/assets/support-us/sponsors/zaga_zaga.webp",
      websiteLink: "https://zagazaga.ro/",
      tier: gold,
    },
    {
      name: "Idna Power",
      logoPath: "/assets/support-us/sponsors/idna_power.webp",
      websiteLink: "https://idnasolarpower.ro/",
      tier: gold,
    },
    {
      name: "Arcmode",
      logoPath: "/assets/support-us/sponsors/arcmode.webp",
      websiteLink: "https://marmura-granit-focsani.ro/",
      tier: gold,
    },
    {
      name: "DeepServ",
      logoPath: "/assets/support-us/sponsors/deepserv.webp",
      websiteLink: "https://deep-serv.ro",
      tier: gold,
    },
    {
      name: "Allvet",
      logoPath: "/assets/support-us/sponsors/allvet.webp",
      websiteLink: "http://allvet.ro/",
      tier: silver,
    },
    {
      name: "Diacarn",
      logoPath: "/assets/support-us/sponsors/diacarn.webp",
      websiteLink: "https://diacarnfood.ro/",
      tier: silver,
    },
    {
      name: "Rix Rooms",
      logoPath: "/assets/support-us/sponsors/rixrooms.webp",
      websiteLink: "https://rixrooms.ro/",
      tier: silver,
    },
    {
      name: "Dentexcel",
      logoPath: "/assets/support-us/sponsors/dentexcel.webp",
      websiteLink: "https://www.hyperclinicadentexcel.ro/",
      tier: silver,
    },
    {
      name: "Dentrust",
      logoPath: "/assets/support-us/sponsors/dentrust.webp",
      websiteLink: "https://dentrust.ro/",
      tier: silver,
    },
    {
      name: "Edil Dan Construct",
      logoPath: "/assets/support-us/sponsors/edil-dan-construct.webp",
      websiteLink: "https://g.co/kgs/RJKxLfy",
      tier: silver,
    },
    {
      name: "Ceproinv",
      logoPath: "/assets/support-us/sponsors/ceproinv.webp",
      websiteLink: "https://www.ceproinv.ro/",
      tier: silver,
    },
    {
      name: "DataHost",
      logoPath: "/assets/support-us/sponsors/datahost.webp",
      websiteLink: "https://www.datahost.ro/",
      tier: silver,
    },
  ];
};
