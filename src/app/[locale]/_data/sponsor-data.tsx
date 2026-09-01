import { CDN_LINK } from "../constants";
import {
  TierProps,
  useBronze,
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
  const bronze = useBronze();
  const silver = useSilver();
  const gold = useGold();
  const diamond = useDiamond();
  const ultimate = useUltimate();

  return [
    {
      name: "Asociația Uniriștii",
      logoPath: CDN_LINK + "/sponsors/asociatia-uniristii.webp",
      websiteLink: "http://uniristii.lufo.ro/index.php",
      tier: diamond,
    },
    {
      name: "Autovip",
      logoPath: CDN_LINK + "/sponsors/autovip.webp",
      websiteLink: "https://autoviptransfer.ro",
      tier: diamond,
    },
    {
      name: "Aviputna",
      logoPath: CDN_LINK + "/sponsors/aviputna.webp",
      websiteLink: "https://aviputna.ro",
      tier: silver,
    },
    {
      name: "Banca Transilvania",
      logoPath: CDN_LINK + "/sponsors/banca-transilvania.webp",
      websiteLink: "https://www.bancatransilvania.ro",
      tier: silver,
    },
    {
      name: "CDP Smart",
      logoPath: CDN_LINK + "/sponsors/cdp-smart.webp",
      websiteLink: "https://cdpsmart.ro",
      tier: bronze,
    },
    {
      name: "Ceproinv",
      logoPath: CDN_LINK + "/sponsors/ceproinv.webp",
      websiteLink: "https://ceproinv.ro",
      tier: silver,
    },
    {
      name: "Deepserv",
      logoPath: CDN_LINK + "/sponsors/deepserv.webp",
      websiteLink: "https://deep-serv.ro/wp/",
      tier: silver,
    },
    {
      name: "Dentexcel",
      logoPath: CDN_LINK + "/sponsors/dentexcel.webp",
      websiteLink: "https://www.hyperclinicadentexcel.ro",
      tier: bronze,
    },
    {
      name: "Dentrust",
      logoPath: CDN_LINK + "/sponsors/dentrust.webp",
      websiteLink: "https://dentrust.ro",
      tier: silver,
    },
    {
      name: "Dr. de Zâmbete",
      logoPath: CDN_LINK + "/sponsors/dr-de-zambete.webp",
      websiteLink: "https://doctordezambete.ro/",
      tier: silver,
    },
    {
      name: "Electric SRL",
      logoPath: CDN_LINK + "/sponsors/electric-srl.webp",
      websiteLink: "https://www.electricsrl.ro",
      tier: silver,
    },
    {
      name: "GM Extractions",
      logoPath: CDN_LINK + "/sponsors/gm-extractions.png",
      websiteLink: "",
      tier: gold,
    },
    {
      name: "Il Gusto",
      logoPath: CDN_LINK + "/sponsors/il-gusto.webp",
      websiteLink: "https://ilgusto.ro",
      tier: bronze,
    },
    {
      name: "Micromet",
      logoPath: CDN_LINK + "/sponsors/micromet.svg",
      websiteLink: "https://www.micromet.ro/",
      tier: diamond,
    },
    {
      name: "Nova Gym",
      logoPath: CDN_LINK + "/sponsors/novagym.webp",
      websiteLink: "https://www.novagym.ro/",
      tier: bronze,
    },
    {
      name: "Primăria Municipiului Focșani",
      logoPath: CDN_LINK + "/sponsors/primaria.webp",
      websiteLink: "https://www.focsani.info",
      tier: ultimate,
    },
    {
      name: "Ravenol",
      logoPath: CDN_LINK + "/sponsors/ravenol.webp",
      websiteLink: "https://www.ravenol.ro/?srsltid=AfmBOoofYYCt1FecgTqiDLlA0KF4aOqb4UtjHJ6EY3fGfiaHNaQWMDKg",
      tier: silver,
    },
    {
      name: "Romans",
      logoPath: CDN_LINK + "/sponsors/romans.png",
      websiteLink: "https://romans.ro",
      tier: gold,
    },
    {
      name: "Scorpion",
      logoPath: CDN_LINK + "/sponsors/scorpion.webp",
      websiteLink: "https://scoalascorpion.ro",
      tier: bronze,
    },
    {
      name: "Termofutura",
      logoPath: CDN_LINK + "/sponsors/termofutura.webp",
      websiteLink: "https://www.termofutura.ro",
      tier: bronze,
    },
    {
      name: "Unior",
      logoPath: CDN_LINK + "/sponsors/unior-tepid.png",
      websiteLink: "https://sculeserioase.ro",
      tier: diamond,
    },
    {
      name: "Viva Credit",
      logoPath: CDN_LINK + "/sponsors/vivacredit.webp",
      websiteLink: "https://vivacredit.ro",
      tier: ultimate,
    },
  ];
};
