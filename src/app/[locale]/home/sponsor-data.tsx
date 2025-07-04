import {
  TierProps,
  useDiamond,
  useGold,
  useSilver,
  useUltimate,
} from "../support-us/sponsor-tiers-data";

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
      logoPath: "/sponsors/micromet.webp",
      websiteLink: "https://www.micromet.ro/",
      tier: ultimate,
    },
    {
      name: "UMB Grup",
      logoPath: "/sponsors/umb.webp",
      websiteLink: "https://www.facebook.com/p/UMB-GRUP-100063895189860/",
      tier: ultimate,
    },
    {
      name: "Autovip",
      logoPath: "/sponsors/autovip.webp",
      websiteLink: "https://autoviptransfer.ro/",
      tier: diamond,
    },
    {
      name: "Fundatia Fan Courier",
      logoPath: "/sponsors/fundatia_fan.webp",
      websiteLink: "https://fundatiafancourier.ro/",
      tier: diamond,
    },
    {
      name: "Remat Holding",
      logoPath: "/sponsors/remat.webp",
      websiteLink: "https://rematholding.ro/",
      tier: diamond,
    },
    {
      name: "Vrancart Group",
      logoPath: "/sponsors/vrancart.webp",
      websiteLink: "https://vrancart.ro/",
      tier: diamond,
    },
    {
      name: "Roman's",
      logoPath: "/sponsors/romans.webp",
      websiteLink: "https://romans.ro/",
      tier: diamond,
    },
    {
      name: "Paco Supermarket ",
      logoPath: "/sponsors/paco.webp",
      websiteLink: "https://pacomarket.ro/",
      tier: diamond,
    },
    {
      name: "Aviputna",
      logoPath: "/sponsors/aviputna.webp",
      websiteLink: "https://aviputna.ro/",
      tier: gold,
    },
    {
      name: "Banca Transilvania",
      logoPath: "/sponsors/banca_transilvania.webp",
      websiteLink: "https://www.bancatransilvania.ro/",
      tier: gold,
    },
    {
      name: "Reina Bijou",
      logoPath: "/sponsors/reina.webp",
      websiteLink: "http://www.reinabijou.ro/",
      tier: gold,
    },
    {
      name: "Zaga Zaga",
      logoPath: "/sponsors/zaga_zaga.webp",
      websiteLink: "https://zagazaga.ro/",
      tier: gold,
    },
    {
      name: "Idna Power",
      logoPath: "/sponsors/idna_power.webp",
      websiteLink: "https://idnasolarpower.ro/",
      tier: gold,
    },
    {
      name: "Rikora",
      logoPath: "/sponsors/rikora.webp",
      websiteLink: "https://rikora.net/",
      tier: gold,
    },
    {
      name: "Arcmode",
      logoPath: "/sponsors/arcmode.webp",
      websiteLink: "https://marmura-granit-focsani.ro/",
      tier: gold,
    },
    {
      name: "DeepServ",
      logoPath: "/sponsors/deepserv.webp",
      websiteLink: "https://deep-serv.ro",
      tier: gold,
    },
    {
      name: "Allvet",
      logoPath: "/sponsors/allvet.webp",
      websiteLink: "http://allvet.ro/",
      tier: silver,
    },
    {
      name: "Diacarn",
      logoPath: "/sponsors/diacarn.webp",
      websiteLink: "https://diacarnfood.ro/",
      tier: silver,
    },
    {
      name: "Rix Rooms",
      logoPath: "/sponsors/rixrooms.webp",
      websiteLink: "https://rixrooms.ro/",
      tier: silver,
    },
    {
      name: "Dentexcel",
      logoPath: "/sponsors/dentexcel.webp",
      websiteLink: "https://www.hyperclinicadentexcel.ro/",
      tier: silver,
    },
    {
      name: "Dentrust",
      logoPath: "/sponsors/dentrust.webp",
      websiteLink: "https://dentrust.ro/",
      tier: silver,
    },
    {
      name: "Edil Dan Construct",
      logoPath: "/sponsors/edil-dan-construct.webp",
      websiteLink: "https://g.co/kgs/RJKxLfy",
      tier: silver,
    },
    {
      name: "Ceproinv",
      logoPath: "/sponsors/ceproinv.webp",
      websiteLink: "https://www.ceproinv.ro/",
      tier: silver,
    },
  ];
};
