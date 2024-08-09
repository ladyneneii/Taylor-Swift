import { createTrackId } from "@/shared/types";
import { albums } from "./img-data";

export interface TrackInfo {
  title: string;
  url: string;
  defaultUrl?: string;
}

export interface Tracks {
  trackList: TrackInfo[];
  vaultTrackList?: TrackInfo[];
  vaultDesc?: string;
  bonusTrackList?: TrackInfo[];
  bonusDesc?: string;
}

interface TrackAlbum {
  idx: number;
  title: string;
  trackId: string;
  url: string;
  length: number;
  albumNumber: number;
  albumPath: string;
}

export interface Track {
  trackIndex: number;
  url: string;
  title: string;
  trackAlbumLength: number;
}

export const debutTrackList = [
  {
    title: "Tim McGraw",
    url: "https://www.youtube.com/embed/GkD20ajVxnY?si=TxQd87ou4i5kqOVC",
  },
  {
    title: "Picture To Burn",
    url: "https://www.youtube.com/embed/yCMqcFAigRg?si=5W2COhQJq-PSX1Bb",
  },
  {
    title: "Teardrops On My Guitar",
    url: "https://www.youtube.com/embed/xKCek6_dB0M?si=em7kfmEv0M8DJQqr",
    defaultUrl:
      "https://www.youtube.com/embed/xKCek6_dB0M?si=NzXexXBrnBfXaJFt&amp;start=70",
  },
  {
    title: "A Place In This World",
    url: "https://www.youtube.com/embed/pYFqLzFoHo0?si=uI_1_urUZu3k2FBU",
  },
  {
    title: "Cold As You",
    url: "https://www.youtube.com/embed/SoXPvCcFibo?si=uNuKZqiRHq3Chvuf",
  },
  {
    title: "The Outside",
    url: "https://www.youtube.com/embed/L4hOi4KvRY0?si=jG4UGcDRPeigXBvy",
  },
  {
    title: "Tied Together With A Smile",
    url: "https://www.youtube.com/embed/aCVHGH5sO0c?si=mqQEVh08WqepHwHO",
  },
  {
    title: "Stay Beautiful",
    url: "https://www.youtube.com/embed/6BOPfGQLUH8?si=tQtVGzm0mWS-BlGM",
  },
  {
    title: "Should've Said No",
    url: "https://www.youtube.com/embed/dUisZV--Nbs?si=zuLaXsJQRanAheMP",
  },
  {
    title: "Mary's Song (Oh My My My)",
    url: "https://www.youtube.com/embed/iVfVuptgjeU?si=Wyx1D9rQeEiVbQe_",
  },
  {
    title: "Our Song",
    url: "https://www.youtube.com/embed/Jb2stN7kH28?si=Hs64qpwl3wBKSF2p",
  },
  {
    title: "I'm Only Me When I'm With You (2008, Deluxe)",
    url: "https://www.youtube.com/embed/AlTfYj7q5gQ?si=mE_zYr3BBkC2ETIV",
  },
  {
    title: "Invisible (2008, Deluxe)",
    url: "https://www.youtube.com/embed/8OOKMt0Rz1k?si=BxTg1vPVMhozJx-B",
  },
  {
    title: "A Perfectly Good Heart (2008, Deluxe)",
    url: "https://www.youtube.com/embed/vv85ZAvrVDU?si=w-usFgg-I3rbuvgy",
  },
  {
    title: "Teardrops on My Guitar Pop Version (2008)",
    url: "https://www.youtube.com/embed/rX2wtAomWVo?si=bnKnqowQQ5GD4t3u",
  },
  {
    title: "I Heart ? (Best Buy Digital Download)",
    url: "https://www.youtube.com/embed/rmMUttmS8kY?si=YREr9OlpZGqWkFu6",
  },
  {
    title: "Crazier",
    url: "https://www.youtube.com/embed/B0p4Lv0t124?si=afSna_Jt3Wwj_usC&amp;start=96",
  },
];

// const debutBonusTrackList = [
//   {
//     title: "Crazier",
//     url: "https://www.youtube.com/embed/B0p4Lv0t124?si=afSna_Jt3Wwj_usC&amp;start=96",
//   },
// ];

const debutBonusTrackDesc =
  "Taylor Swift wrote and sang Crazier for Hannah Montana: The Movie and is actually not part of this album. However, we, the Swifties, hope for this song to make it to the Taylor's Version of this album as she recently sang this song at the Eras Tour in June 2024.";

export const fearlessTVTrackList = [
  {
    title: "Fearless (Taylor's Version)",
    url: "https://www.youtube.com/embed/7lLigiVgJsE?si=SCcavwK9PaG0pDz_",
    defaultUrl:
      "https://www.youtube.com/embed/7lLigiVgJsE?si=ElRm5zcBLUxjwgvP&amp;start=190",
  },
  {
    title: "Fifteen (Taylor's Version)",
    url: "https://www.youtube.com/embed/rLCol1C3ouc?si=Fck1Ba532KXHMXC-",
  },
  {
    title: "Love Story (Taylor’s Version)",
    url: "https://www.youtube.com/embed/aXzVF3XeS8M?si=gvb6T8OxubwATyEH",
  },
  {
    title: "Hey Stephen (Taylor's Version)",
    url: "https://www.youtube.com/embed/tMhiHrL7rPE?si=P2SUqSn7UWJjCfoA",
  },
  {
    title: "White Horse (Taylor's Version)",
    url: "https://www.youtube.com/embed/9-rKvhsjwKU?si=BbsnXa49YRqnJg4i",
  },
  {
    title: "You Belong With Me (Taylor's Version)",
    url: "https://www.youtube.com/embed/vwp8Ur6tO-8?si=y-vZj-vSy8lAxFnE",
  },
  {
    title: "Breathe (feat. Colbie Caillat) (Taylor’s Version)",
    url: "https://www.youtube.com/embed/qsUK-BG5OQQ?si=9MVRU2KpgU-RE1tZ",
  },
  {
    title: "Tell Me Why (Taylor’s Version)",
    url: "https://www.youtube.com/embed/cwFbq-70EwE?si=ftPcOcW6QMX1eYBb",
  },
  {
    title: "You’re Not Sorry (Taylor’s Version)",
    url: "https://www.youtube.com/embed/DNaSlUYIXBg?si=YAZZqurrlvVNTahL",
  },
  {
    title: "The Way I Loved You (Taylor’s Version)",
    url: "https://www.youtube.com/embed/DlexmDDSDZ0?si=En7jZgeOxHRzCnBb",
  },
  {
    title: "Forever & Always (Taylor’s Version)",
    url: "https://www.youtube.com/embed/T-41vMWQTUA?si=2BNlUhrmpFeQtGwy",
  },
  {
    title: "The Best Day (Taylor’s Version)",
    url: "https://www.youtube.com/embed/KZeI9I875Ig?si=kVyt_0aHcbxtXGT0",
  },
  {
    title: "Change (Taylor’s Version)",
    url: "https://www.youtube.com/embed/jwWR1cQTKyw?si=FLvU5AsJwVzpTRnb",
  },
  {
    title: "Jump Then Fall (Taylor’s Version)",
    url: "https://www.youtube.com/embed/vUHDR6Rg3Y4?si=T1HQiGtB5FPY06ix",
  },
  {
    title: "Untouchable (Taylor’s Version)",
    url: "https://www.youtube.com/embed/8bNlGwnEUAs?si=Oh83zkHj2_bfZor3",
  },
  {
    title: "Forever & Always (Piano Version) (Taylor’s Version)",
    url: "https://www.youtube.com/embed/RcGowZ26sE0?si=bodGV-mEQ63MtR9w",
  },
  {
    title: "Come In With The Rain (Taylor’s Version)",
    url: "https://www.youtube.com/embed/ePjcjLRHPOo?si=9cgkZ5Qb9b1XxlqA",
  },
  {
    title: "Superstar (Taylor’s Version)",
    url: "https://www.youtube.com/embed/IsCik8wznlU?si=XG8TYJ8RLQjkteUt",
  },
  {
    title: "The Other Side Of The Door (Taylor’s Version)",
    url: "https://www.youtube.com/embed/425n1NoRtgA?si=oTfxH9To5zlmPVNt",
  },
  {
    title: "Today Was A Fairytale (Taylor’s Version)",
    url: "https://www.youtube.com/embed/xSWVPqnKcXQ?si=iJQkHHzXGO1YP1u-",
  },
  {
    title:
      "You All Over Me (Taylor's Version) (feat. Maren Morris) (From The Vault)",
    url: "https://www.youtube.com/embed/XKaMUm7YwZc?si=cPWslOmKezY4TXSP",
  },
  {
    title: "Mr. Perfectly Fine (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/rFjJs6ZjPe8?si=BWYEkBmLcWIk5353",
  },
  {
    title: "We Were Happy (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/seU5y5EgIwk?si=ct2w2sl17Ir3IQaB",
  },
  {
    title:
      "That’s When (Taylor's Version) (feat. Keith Urban) (From The Vault)",
    url: "https://www.youtube.com/embed/aOa6D6ku3dM?si=4Xv6DAh5KyX503Nk",
  },
  {
    title: "Don’t You (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/dHdAN4FXzmc?si=fjSzt1-QZ111bi5H",
  },
  {
    title: "Bye Bye Baby (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/yuFuwXd-B9E?si=7TzS39RimSDeQukO",
  },
  {
    title: "Bonus Track: Love Story (Taylor’s Version) - Elvira Remix",
    url: "https://www.youtube.com/embed/FeTHyZJvozc?si=mKdF5k1IGrzfHDNE",
  },
];

// const fearlessTVVaultTrackList = [
//   {
//     title: "You All Over Me (feat. Maren Morris) (From The Vault)",
//     url: "https://www.youtube.com/embed/XKaMUm7YwZc?si=cPWslOmKezY4TXSP",
//   },
//   {
//     title: "Mr. Perfectly Fine (From The Vault)",
//     url: "https://www.youtube.com/embed/rFjJs6ZjPe8?si=BWYEkBmLcWIk5353",
//   },
//   {
//     title: "We Were Happy (From The Vault)",
//     url: "https://www.youtube.com/embed/seU5y5EgIwk?si=ct2w2sl17Ir3IQaB",
//   },
//   {
//     title: "That’s When (feat. Keith Urban) (From The Vault)",
//     url: "https://www.youtube.com/embed/aOa6D6ku3dM?si=4Xv6DAh5KyX503Nk",
//   },
//   {
//     title: "Don’t You (From The Vault)",
//     url: "https://www.youtube.com/embed/dHdAN4FXzmc?si=fjSzt1-QZ111bi5H",
//   },
//   {
//     title: "Bye Bye Baby (From The Vault)",
//     url: "https://www.youtube.com/embed/yuFuwXd-B9E?si=7TzS39RimSDeQukO",
//   },
// ];

const vaultTrackDescription = `Vault tracks refer to Taylor Swift's songs that did not make it to the stolen versions of the first six albums but made it to the Taylor's Versions of the same albums. Simply put, when Taylor releases a Taylor's Version of an album, she includes all of the existing songs from the stolen version of the album with Taylor's Version in parentheses next to the titles, plus the additional vault tracks or songs that she had written at the time but did not make it onto the stolen version of the album. These songs are annotated with (From the Vault). However, vault tracks are not limited to the first six stolen albums, as they can also be found on albums already fully owned by Taylor Swift. Tracks are considered "from the vault" if they had already been written and created together with the other tracks on the album but were not included in the initial release of the album; instead, vault tracks are included in special or extra releases of the album. An example of this is You're Losing Me (From The Vault) on the Midnights album, which is not included in the standard edition track listing of Midnights but is included in Midnights Late Night Edition tracks.`;

// const fearlessTVBonusTrackList = [
//   {
//     title: "Bonus Track: Love Story (Taylor’s Version) - Elvira Remix",
//     url: "https://www.youtube.com/embed/FeTHyZJvozc?si=mKdF5k1IGrzfHDNE",
//   },
// ];

const speakNowTVTrackList = [
  {
    title: "Mine (Taylor's Version)",
    url: "https://www.youtube.com/embed/oxNLRqMJMZk?si=bB7V2zVJcAIPkh_3",
  },
  {
    title: "Sparks Fly (Taylor's Version)",
    url: "https://www.youtube.com/embed/UlFrV5GJA_4?si=tZzqbE4sbyTd7a7k",
  },
  {
    title: "Back To December (Taylor's Version)",
    url: "https://www.youtube.com/embed/qc2Z-OX9wnc?si=vnFfZTLv21Zj0BZV",
  },
  {
    title: "Speak Now (Taylor's Version)",
    url: "https://www.youtube.com/embed/qc2Z-OX9wnc?si=v74xAj49NPWK0t7U",
  },
  {
    title: "Dear John (Taylor's Version)",
    url: "https://www.youtube.com/embed/N-FYySSy0rM?si=l9I1LUkOmV4VkMPD",
  },
  {
    title: "Mean (Taylor's Version)",
    url: "https://www.youtube.com/embed/8AR1dKawCi8?si=hxZBRNjCkbdw0VY-",
  },
  {
    title: "The Story Of Us (Taylor's Version)",
    url: "https://www.youtube.com/embed/pRhWAXg4xek?si=2Y8PzFwR2lwDHaQ9",
  },
  {
    title: "Never Grow Up (Taylor's Version)",
    url: "https://www.youtube.com/embed/maEVfpxDB8k?si=WEZM2TpBsiTMc3au",
  },
  {
    title: "Enchanted (Taylor's Version)",
    url: "https://www.youtube.com/embed/igIfiqqVHtA?si=Kq4A4isohRxD3PWn",
    defaultUrl:
      "https://www.youtube.com/embed/igIfiqqVHtA?si=lL0iFGHnz0_tz2J0&amp;start=288",
  },
  {
    title: "Better Than Revenge (Taylor's Version)",
    url: "https://www.youtube.com/embed/EH70M5OeS4o?si=5OoERWLw-EUSV4EC",
  },
  {
    title: "Innocent (Taylor's Version)",
    url: "https://www.youtube.com/embed/vO6JqQpJboY?si=7i-hCSojTO7Ow5ll",
  },
  {
    title: "Haunted (Taylor's Version)",
    url: "https://www.youtube.com/embed/4cC6fw8EqWU?si=-mcrD-kQT32ZlF1j",
  },
  {
    title: "Last Kiss (Taylor's Version)",
    url: "https://www.youtube.com/embed/idWma942CUI?si=G68VbQyI-B_WNywA",
  },
  {
    title: "Long Live (Taylor's Version)",
    url: "https://www.youtube.com/embed/F5TMU6916U8?si=IsFZtnr4_zWDqs1Y",
  },
  {
    title: "Ours (Taylor's Version)",
    url: "https://www.youtube.com/embed/PH8Uc0Z_KRY?si=E2D1p2LQ2GpRQ2Bg",
  },
  {
    title: "Superman (Taylor's Version)",
    url: "https://www.youtube.com/embed/Fn0er7H1Dm0?si=S67HxyFkzedReO2s",
  },
  {
    title:
      "Electric Touch (Taylor’s Version) (feat. Fall Out Boy)  (From The Vault)",
    url: "https://www.youtube.com/embed/hMPK2vNXr-E?si=1HAToQmgvNoHqDgY",
  },
  {
    title: "When Emma Falls In Love (Taylor’s Version) (From The Vault)",
    url: "https://www.youtube.com/embed/IYqgVYjN3Go?si=1_Qq55o8ugzAD_yC",
  },
  {
    title: "I Can See You (Taylor’s Version) (From The Vault)",
    url: "https://www.youtube.com/embed/lVkKLf4DCn8?si=3iv19ggqBjCWIeQW",
  },
  {
    title:
      "Castles Crumbling (Taylor’s Version) (feat. Hayley Williams) (From The Vault)",
    url: "https://www.youtube.com/embed/V80A8qN4fR8?si=okJ4TmAL-x9-0S5_",
  },
  {
    title: "Foolish One (Taylor’s Version) (From The Vault)",
    url: "https://www.youtube.com/embed/6-x1AlDudZw?si=S5ZbZc2sWcO4vXI2",
  },
  {
    title: "Timeless (Taylor’s Version) (From The Vault)",
    url: "https://www.youtube.com/embed/osmzwWw4RYM?si=Cmsc5zujgYoWzdrB",
  },
];

const redTVTrackList = [
  {
    title: "State Of Grace (Taylor's Version)",
    url: "https://www.youtube.com/embed/-mrC5tRkxrY?si=mnpI-yK1BQVC21s_",
  },
  {
    title: "Red (Taylor's Version)",
    url: "https://www.youtube.com/embed/R_rUYuFtNO4?si=ESM04VgUbW-HWmUN",
  },
  {
    title: "Treacherous (Taylor's Version)",
    url: "https://www.youtube.com/embed/u1D1AgDfreg?si=9boHhkvqPbppxBuU",
  },
  {
    title: "I Knew You Were Trouble (Taylor's Version)",
    url: "https://www.youtube.com/embed/TqAollrUJdA?si=gQnxwC8SBwZUej6h",
  },
  {
    title: "All Too Well (Taylor's Version)",
    url: "https://www.youtube.com/embed/9OQBDdNHmXo?si=dAymVUCdjOIMvEx5",
  },
  {
    title: "22 (Taylor's Version)",
    url: "https://www.youtube.com/embed/9boiT64sm0Q?si=YHljRu6UgHeLKMjv",
  },
  {
    title: "I Almost Do (Taylor's Version)",
    url: "https://www.youtube.com/embed/w1AV_35zVwU?si=Fcg_SxIFjz8iO9IG",
  },
  {
    title: "We Are Never Ever Getting Back Together (Taylor's Version)",
    url: "https://www.youtube.com/embed/w1AV_35zVwU?si=MHiqItnXBT48MWeM",
  },
  {
    title: "Stay Stay Stay (Taylor's Version)",
    url: "https://www.youtube.com/embed/OhJ-S9Nrh7Q?si=pmyZ_yRphO7G_vWl",
  },
  {
    title: "The Last Time (Taylor's Version) (feat. Gary Lightbody)",
    url: "https://www.youtube.com/embed/pCH4QrSx2Jg?si=53lp-9xbC9PyBEsY",
  },
  {
    title: "Holy Ground (Taylor's Version)",
    url: "https://www.youtube.com/embed/S4PuN-IWi2g?si=R6O-FlyAzyYtXa87",
  },
  {
    title: "Sad Beautiful Tragic (Taylor's Version)",
    url: "https://www.youtube.com/embed/jQfB4Gahi3I?si=fpZET7AbNS2eUnoI",
  },
  {
    title: "The Lucky One (Taylor's Version)",
    url: "https://www.youtube.com/embed/4LtQxA_ooLk?si=ADnNYCdttnzjQPqc",
  },
  {
    title: "Everything Has Changed (Taylor's Version) (feat. Ed Sheeran)",
    url: "https://www.youtube.com/embed/eMcMbWl0fDk?si=i15cwAXpbholmbef",
  },
  {
    title: "Starlight (Taylor's Version)",
    url: "https://www.youtube.com/embed/lPvcwgEuKTg?si=JaEFAoxohDltBOgD",
  },
  {
    title: "Begin Again (Taylor's Version)",
    url: "https://www.youtube.com/embed/dXNZaHuKWNA?si=Y4R3farQk5nyCPnF",
  },
  {
    title: "The Moment I Knew (Taylor's Version)",
    url: "https://www.youtube.com/embed/LmXn6BU16e0?si=IfUJ5ZDoO41OxPz7",
  },
  {
    title: "Come Back...Be Here (Taylor's Version)",
    url: "https://www.youtube.com/embed/hHWOAUjnmjQ?si=xExabC6CcNgkm_Fb",
  },
  {
    title: "Girl At Home (Taylor's Version)",
    url: "https://www.youtube.com/embed/UNckfN9upqo?si=VghI540pNc3XuMqB",
  },
  {
    title: "State Of Grace (Acoustic Version) (Taylor's Version)",
    url: "https://www.youtube.com/embed/D3mJe28un4M?si=2b5CGozMhT8hJzRZ",
  },
  {
    title: "Ronan (Acoustic Version) (Taylor's Version)",
    url: "https://www.youtube.com/embed/kdiBc40gW7s?si=VQgV8vTvC8Co34oM",
  },
  {
    title: "Better Man (Acoustic Version) (Taylor's Version)",
    url: "https://www.youtube.com/embed/PReSQYTFvcs?si=Ph52E01mU3ej7aah",
  },
  {
    title:
      "Nothing New (Taylor's Version) (feat. Phoebe Bridgers) (From The Vault)",
    url: "https://www.youtube.com/embed/m3fWCRvz5JA?si=yp-rLMdbUaaRI-mX",
  },
  {
    title: "Babe (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/3pj39qZZYoQ?si=PXRdoXNYo5ISr6YH",
  },
  {
    title: "Message In A Bottle (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/cVaG6adE2mA?si=nJ5EWv3XjPBWlrAf",
  },
  {
    title:
      "I Bet You Think About Me (Taylor's Version) (feat. Chris Stapleton) (From The Vault)",
    url: "https://www.youtube.com/embed/VN55tCajFYg?si=ekpvqj4S12J2dMaV",
  },
  {
    title: "Forever Winter (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/TkAomsYFsJw?si=K5f9yyngchaHHQrM",
  },
  {
    title: "Run (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/flv8AEWrRMI?si=NxqVtw2GmKBHyiBS",
  },
  {
    title: "The Very First Night (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/rVuyi-dPMIc?si=Ze02qZWCrn1AcjJz",
  },
  {
    title:
      "All Too Well (10 Minute Version) (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/sRxrwjOtIag?si=PBIsw75nBLZCd0GR",
    defaultUrl:
      "https://www.youtube.com/embed/sRxrwjOtIag?si=70Ey33_znJWtvK0_&amp;start=238",
  },
];

const _1989TVTrackList = [
  {
    title: "Welcome To New York (Taylor's Version)",
    url: "https://www.youtube.com/embed/FsGdznlfE2U?si=rBRjLEH9f-Snf7z0",
  },
  {
    title: "Blank Space (Taylor's Version)",
    url: "https://www.youtube.com/embed/gir8BEqAutk?si=h6FNDsLua2Fpx5Gl",
  },
  {
    title: "Style (Taylor's Version)",
    url: "https://www.youtube.com/embed/2JgvVfOfoWI?si=blXNYDROZMuUpM7h",
    defaultUrl:
      "https://www.youtube.com/embed/2JgvVfOfoWI?si=uoMdrQfxSRFJd6Wd&amp;start=131",
  },
  {
    title: "Out Of The Woods (Taylor's Version)",
    url: "https://www.youtube.com/embed/gp1MR2WAAXY?si=ezvCMEwdVNBVcTo6",
  },
  {
    title: "All You Had To Do Was Stay (Taylor's Version)",
    url: "https://www.youtube.com/embed/_Usd5X5XJXM?si=BRJIxTiy0DcYXZcH",
  },
  {
    title: "Shake It Off (Taylor's Version)",
    url: "https://www.youtube.com/embed/mvVBuG4IOW4?si=_nn3T8XcTLytAAop",
  },
  {
    title: "I Wish You Would (Taylor's Version)",
    url: "https://www.youtube.com/embed/89aQIli8aVU?si=ST0cZgb9Qx5wy_qq",
  },
  {
    title: "Bad Blood (Taylor's Version)",
    url: "https://www.youtube.com/embed/lUvBk4owRNU?si=8V4sYcqYh9UW_FbX",
  },
  {
    title: "Wildest Dreams (Taylor's Version)",
    url: "https://www.youtube.com/embed/vtW_4j7SsZk?si=_EvvasmN08hjqkYC",
  },
  {
    title: "How You Get The Girl (Taylor's Version)",
    url: "https://www.youtube.com/embed/rnwD7veCoFQ?si=O3o62qNDVelXqiWn",
  },
  {
    title: "This Love (Taylor's Version)",
    url: "https://www.youtube.com/embed/mvxQYPR4lmU?si=6_ZWbhjdNxiU4zRL",
  },
  {
    title: "I Know Places (Taylor's Version)",
    url: "https://www.youtube.com/embed/0jTGzm-6cYE?si=DScbxPeH-eQb1RsT",
  },
  {
    title: "Clean (Taylor's Version)",
    url: "https://www.youtube.com/embed/AppsjTInqiw?si=9XL-4d8-CDuYybYU",
  },
  {
    title: "Wonderland (Taylor's Version)",
    url: "https://www.youtube.com/embed/JhICcmiIE80?si=y8xur6hlq7Gfp5Ue",
  },
  {
    title: "You Are In Love (Taylor's Version)",
    url: "https://www.youtube.com/embed/M7ySK0keirY?si=dWJqELJZyG1EneD6",
  },
  {
    title: "New Romantics (Taylor's Version)",
    url: "https://www.youtube.com/embed/3-BcH7KowGE?si=f3XZl_Ov2e4SYc2U",
  },
  {
    title: `"Slut!" (Taylor's Version) (From The Vault)`,
    url: "https://www.youtube.com/embed/qrxsceexTBw?si=VqwAQS7jRR4-2--K",
  },
  {
    title: "Say Don't Go (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/C-z-IckrQK8?si=a5MgIZPsuVuZDBOz",
  },
  {
    title: "Now That We Don't Talk (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/yF4ulRTCn44?si=wP_PzuPyX6ru3oI4",
  },
  {
    title: "Suburban Legends (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/ZGBPKYbzSXs?si=VM2xHzNsicbKZO9P",
  },
  {
    title: "Is It Over Now? (Taylor's Version) (From The Vault)",
    url: "https://www.youtube.com/embed/tNxUxm3-658?si=hrYi0umUXqMTcej_",
  },
  {
    title: "Bad Blood (Taylor's Version) (feat. Kendrick Lamar)",
    url: "https://www.youtube.com/embed/582ZOHm9e40?si=tqC1RXjE2i8ra5BG",
  },
  {
    title: "Sweeter Than Fiction (Taylor's Version)",
    url: "https://www.youtube.com/embed/b8YQPcqTCAI?si=PAP3plHft2xPnkCV",
  },
];

const reputationTrackList = [
  {
    title: "...Ready For It?",
    url: "https://www.youtube.com/embed/wIft-t-MQuE?si=O9wZn3XkEE6RZppH",
  },
  {
    title: "End Game (feat. Ed Sheeran, Future)",
    url: "https://www.youtube.com/embed/dfnCAmr569k?si=U40JZrBtgDkSO2hG",
  },
  {
    title: "I Did Something Bad",
    url: "https://www.youtube.com/embed/xYLxUJ9v6KU?si=6-GIiK4TowvHtCqp",
  },
  {
    title: "Don’t Blame Me",
    url: "https://www.youtube.com/embed/kRJKB291Z1g?si=bVDXlYwpK026V-Yo",
  },
  {
    title: "Delicate",
    url: "https://www.youtube.com/embed/tCXGJQYZ9JA?si=ps67dtRANqqmh-cd",
  },
  {
    title: "Look What You Made Me Do",
    url: "https://www.youtube.com/embed/3tmd-ClpJxA?si=Xe7_SFSy1tg_4gSt",
  },
  {
    title: "So It Goes...",
    url: "https://www.youtube.com/embed/iAv1Y1YIwm8?si=MWk-t80DqiKIcwdj",
  },
  {
    title: "Gorgeous",
    url: "https://www.youtube.com/embed/EUoe7cf0HYw?si=JQcfymXKaP65-9DR",
  },
  {
    title: "Getaway Car",
    url: "https://www.youtube.com/embed/FhPLQVlUiNQ?si=wiXT0Hsr80SEpylF",
  },
  {
    title: "King Of My Heart",
    url: "https://www.youtube.com/embed/5U7bF68xcRg?si=u3FyTnJ1qllEwuEJ",
  },
  {
    title: "Dancing With Our Hands Tied",
    url: "https://www.youtube.com/embed/erGyUphZSt8?si=05eRBX2HLKcnHXhB",
  },
  {
    title: "Dress",
    url: "https://www.youtube.com/embed/FNEoPctNIUE?si=v1GUWe8ZovEePPWw",
    defaultUrl:
      "https://www.youtube.com/embed/FNEoPctNIUE?si=fEpa-P5mp8zra2hH&amp;start=174",
  },
  {
    title: "This Is Why We Can't Have Nice Things",
    url: "https://www.youtube.com/embed/6Z3QJ4L1Bg0?si=khmkPyTOtyForzZN",
  },
  {
    title: "Call It What You Want",
    url: "https://www.youtube.com/embed/V54CEElTF_U?si=8g2maqYvit3zFW1h",
  },
  {
    title: "New Year’s Day",
    url: "https://www.youtube.com/embed/KkvTYrFIxNM?si=KaoExHVPZWqPUPse",
  },
  {
    title:
      "ZAYN, Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)",
    url: "https://www.youtube.com/embed/7F37r50VUTQ?si=hWrDT6Ic0VBcLhPn",
  },
];

const fiftyShadesDesc = `I Don't Wanna Live Forever (also subtitled "Fifty Shades Darker") is actually not part of the <span style="font-style: italic">reputation</span> album as it is a song by Zayn and Taylor Swift as a soundtrack to the 2017 film Fifty Shades Darker. However, a lot of fans consider this to belong to the <span style="font-style: italic">reputation</span> era since the song was released around 2017 (same as the album), and its overall vibes, thematically and sonically, match the album's.`;

const loverTrackList = [
  {
    title: "I Forgot That You Existed",
    url: "https://www.youtube.com/embed/p1cEvNn88jM?si=r9lQAM3FXRJpxcJJ",
  },
  {
    title: "Cruel Summer",
    url: "https://www.youtube.com/embed/ic8j13piAhQ?si=lESEx8JR6RDJLkpF",
  },
  {
    title: "Lover",
    url: "https://www.youtube.com/embed/-BjZmE2gtdo?si=WyE1Jn09RX0yTWte",
  },
  {
    title: "The Man",
    url: "https://www.youtube.com/embed/AqAJLh9wuZ0?si=3CROFt4ARqsjuzL6",
  },
  {
    title: "The Archer",
    url: "https://www.youtube.com/embed/8KpKc3C9V3w?si=ald_jVlGdGv478PH",
  },
  {
    title: "I Think He Knows",
    url: "https://www.youtube.com/embed/2d1wKn-oJnA?si=_2itoSRzq76owtJY",
  },
  {
    title: "Miss Americana & The Heartbreak Prince",
    url: "https://www.youtube.com/embed/Kwf7P2GNAVw?si=hXRzdqiQzQPMnllA",
  },
  {
    title: "Paper Rings",
    url: "https://www.youtube.com/embed/8zdg-pDF10g?si=k_dyKMPUx7xV6S7Q",
  },
  {
    title: "Cornelia Street",
    url: "https://www.youtube.com/embed/VikHHWrgb4Y?si=QOtx-n8VJIWhrsv2",
  },
  {
    title: "Death By A Thousand Cuts",
    url: "https://www.youtube.com/embed/GTEFSuFfgnU?si=1tjio0z3Z9Ns7JI7",
  },
  {
    title: "London Boy",
    url: "https://www.youtube.com/embed/VsKoOH6DVys?si=ZPGzaf4nwZSMZsOR",
  },
  {
    title: "Soon You’ll Get Better (feat. The Chicks)",
    url: "https://www.youtube.com/embed/tMoW5G5LU08?si=5BMSYf7VFF2e-cr_",
  },
  {
    title: "False God",
    url: "https://www.youtube.com/embed/acQXa5ArHIk?si=C7rMqBy-PqYo9mgd",
    defaultUrl:
      "https://www.youtube.com/embed/acQXa5ArHIk?si=dELiMDgdV5ATlXJ0&amp;start=134",
  },
  {
    title: "You Need To Calm Down",
    url: "https://www.youtube.com/embed/Dkk9gvTmCXY?si=htgPchWOnrh46szF",
  },
  {
    title: "Afterglow",
    url: "https://www.youtube.com/embed/8HxbqAsppwU?si=5DwKXqwwuqHzlbZ0",
  },
  {
    title: "ME! (feat. Brendon Urie)",
    url: "https://www.youtube.com/embed/FuXNumBwDOM?si=3HtdFAcsYGLS6lsl",
  },
  {
    title: "It’s Nice To Have A Friend",
    url: "https://www.youtube.com/embed/eaP1VswBF28?si=DJthrfxXxvQbFS-1",
  },
  {
    title: "Daylight",
    url: "https://www.youtube.com/embed/u9raS7-NisU?si=qgKRon0GbnT1XnRN",
  },
  {
    title: "Lover Remix (feat. Shawn Mendes)",
    url: "https://www.youtube.com/embed/b5Zay_Hd_7Q?si=GGYezSO14ag3ccjd",
  },
  {
    title: "Lover (First Dance Remix)",
    url: "https://www.youtube.com/embed/KmT4Y8w1nho?si=MbC5xSrgByez8oqS",
  },
  {
    title: "All Of The Girls You Loved Before",
    url: "https://www.youtube.com/embed/HO-31CVnLes?si=PqaRJbQyQsInBS13",
  },
];

const track5Note = `The songs that Taylor Swift puts as the fifth track on all her albums have always been known to be heartbreaking, devastating, and vulnerable. In an interview before the release of Lover, Taylor admitted that she had not noticed that she was putting her "very vulnerable, personal, honest, emotional" song as track five on her previous albums. Since the fans (Swifties) noticed this pattern, she continued doing so for the rest of her albums. Whenever Taylor Swift releases a new album, Swifties always look forward to it, especially the album's heart-wrenching yet beautifully written track five.`;

const folkloreTrackList = [
  {
    title: "the 1",
    url: "https://www.youtube.com/embed/KsZ6tROaVOQ?si=oqtibCEpUVVwlEtb",
  },
  {
    title: "cardigan",
    url: "https://www.youtube.com/embed/K-a8s8OLBSE?si=F9W3DVupVXsY_pm8",
    defaultUrl:
      "https://www.youtube.com/embed/K-a8s8OLBSE?si=HaMDzfGYoK_Tq6ge&amp;start=132",
  },
  {
    title: "the last great american dynasty",
    url: "https://www.youtube.com/embed/2s5xdY6MCeI?si=Ypx25r-HXHgK8I5C",
  },
  {
    title: "exile (feat. Bon Iver)",
    url: "https://www.youtube.com/embed/osdoLjUNFnA?si=_e1ftlinAZlnxeLE",
  },
  {
    title: "my tears ricochet",
    url: "https://www.youtube.com/embed/OWbDJFtHl3w?si=is9PScQWr0Po1SL-",
  },
  {
    title: "mirrorball",
    url: "https://www.youtube.com/embed/KaM1bCuG4xo?si=PJt2xIP69s6t2a8P",
  },
  {
    title: "seven",
    url: "https://www.youtube.com/embed/pEY-GPsru_E?si=omaKyyVZWuLE_zHp",
  },
  {
    title: "august",
    url: "https://www.youtube.com/embed/nn_0zPAfyo8?si=vNWUIj5uqitESe9-",
  },
  {
    title: "this is me trying",
    url: "https://www.youtube.com/embed/9bdLTPNrlEg?si=hMkKJzWsU7UO4pAC",
  },
  {
    title: "illicit affairs",
    url: "https://www.youtube.com/embed/MLV2SJKWk4M?si=x-mph88tnR2GZ_Yc",
  },
  {
    title: "invisible string",
    url: "https://www.youtube.com/embed/OuFnpmGwg5k?si=KnYaaPDPJG5VO3wv",
  },
  {
    title: "mad woman",
    url: "https://www.youtube.com/embed/6DP4q_1EgQQ?si=TDxlto22_NExZhIj",
  },
  {
    title: "epiphany",
    url: "https://www.youtube.com/embed/DUnDkI7l9LQ?si=wxWBWkWyVb5Wppw7",
  },
  {
    title: "betty",
    url: "https://www.youtube.com/embed/6TAPqXkZW_I?si=c_-A4OyabQxjgokQ",
  },
  {
    title: "peace",
    url: "https://www.youtube.com/embed/HpxX4ZE4KWE?si=JHG5Y9coE2NMat_m",
  },
  {
    title: "hoax",
    url: "https://www.youtube.com/embed/ryLGxpjwAhM?si=9EXTZUP2DvTK5Mfa",
  },
  {
    title: "the lakes",
    url: "https://www.youtube.com/embed/tOHcAc3r2kw?si=USgewOHE8QCTmC5W",
  },
  {
    title: "the lakes (original version)",
    url: "https://www.youtube.com/embed/y8tF0yRl8-w?si=862xowsUsingXTr4",
  },
  {
    title: "cardigan (cabin in candlelight version)",
    url: "https://www.youtube.com/embed/i50QUXDeC80?si=rGtIj2h4YV6YVmG7",
  },
];

const evermoreTrackList = [
  {
    title: "willow",
    url: "https://www.youtube.com/embed/RsEZmictANA?si=DyTuuQpvLp7Ag1AJ",
  },
  {
    title: "champagne problems",
    url: "https://www.youtube.com/embed/wMpqCRF7TKg?si=5APBcK2cv7AxkspA",
  },
  {
    title: "gold rush",
    url: "https://www.youtube.com/embed/Pz-f9mM3Ms8?si=5azOe9q0fYaS8XSL",
  },
  {
    title: "‘tis the damn season",
    url: "https://www.youtube.com/embed/WuvhOD-mP8M?si=U5P6IDo1v4Oe4ddy",
  },
  {
    title: "tolerate it",
    url: "https://www.youtube.com/embed/ukxEKY_7MOc?si=cIjq5f0Gu7jTrOs_",
    defaultUrl:
      "https://www.youtube.com/embed/ukxEKY_7MOc?si=2jHP0U5zz0AhO06I&amp;start=54",
  },
  {
    title: "no body, no crime",
    url: "https://www.youtube.com/embed/IEPomqor2A8?si=bnrH7O1_Y1Q42tFa",
  },
  {
    title: "happiness",
    url: "https://www.youtube.com/embed/tP4TTgt4nb0?si=4cL45FYcxTq_NTs2",
  },
  {
    title: "dorothea",
    url: "https://www.youtube.com/embed/zI4DS5GmQWE?si=MMhdHFs9poh6Tobu",
  },
  {
    title: "coney island",
    url: "https://www.youtube.com/embed/c_p_TBaHvos?si=f8cwmMoRAM7sjZg9",
  },
  {
    title: "ivy",
    url: "https://www.youtube.com/embed/9nIOx-ezlzA?si=j9i7ytvm7_OXIM_-",
  },
  {
    title: "cowboy like me",
    url: "https://www.youtube.com/embed/YPlNBb6I8qU?si=aLmUxI6LoiA2FKrM",
  },
  {
    title: "long story short",
    url: "https://www.youtube.com/embed/rqQHa2HcGtM?si=arQFtnVLUxR6XOMF",
  },
  {
    title: "marjorie",
    url: "https://www.youtube.com/embed/hP6QpMeSG6s?si=mO62SPrUepjka6dY",
  },
  {
    title: "closure",
    url: "https://www.youtube.com/embed/AIFnKqIeEdY?si=B5DC5pdkKvjw0AFd",
  },
  {
    title: "evermore (feat. Bon Iver)",
    url: "https://www.youtube.com/embed/EXLgZZE072g?si=gGeZ0SUD7ADfKz2D",
  },
  {
    title: "right where you left me",
    url: "https://www.youtube.com/embed/Ur_wAcYDnuA?si=JQo_agoj-tLsUZHP",
  },
  {
    title: "it’s time to go",
    url: "https://www.youtube.com/embed/1iRbIYkccgw?si=6sqHTT6Z3uyVmrqU",
  },
  {
    title: "willow (lonely witch version)",
    url: "https://www.youtube.com/embed/CYHt7_RANiY?si=6af1JywHXiez8_te",
  },
  {
    title: "willow (dancing witch version)",
    url: "https://www.youtube.com/embed/3CUM7Z3TSmY?si=hEs1wnLGCjffpXrd",
  },
  {
    title: "willow (moonlit witch version)",
    url: "https://www.youtube.com/embed/7XLW5CvDQ7E?si=xhmfMZRMj57dxafz",
  },
  {
    title: "willow - dancing witch version (Elvira remix)",
    url: "https://www.youtube.com/embed/qAGef4MdPdE?si=1yOx5nueSHIJRLMb",
  },
  {
    title: "willow - [yule log]",
    url: "https://www.youtube.com/embed/qybUgW7eoZQ?si=rPoT1IGNTT6fIWSp",
  },
  {
    title: "willow (moonlit witch version) - [yule log]",
    url: "https://www.youtube.com/embed/iTNZ-OzBoBo?si=TxgtTLMDbWbZRJ-R",
  },
  {
    title: "willow (lonely witch version) - [yule log]",
    url: "https://www.youtube.com/embed/H9rBt-8jiBE?si=yKRUQX-XfN1WZf_H",
  },
  {
    title: "willow (dancing witch version) - [yule log]",
    url: "https://www.youtube.com/embed/sViZJopFdYg?si=O34uRO5zTbFRTcgX",
  },
];

const midnightsTrackList = [
  {
    title: "Lavender Haze",
    url: "https://www.youtube.com/embed/h8DLofLM7No?si=561s_RjdTnWO4z8o",
  },
  {
    title: "Maroon",
    url: "https://www.youtube.com/embed/lvHZjvIyqsk?si=fL57HXDK9IrHul3n",
    defaultUrl:
      "https://www.youtube.com/embed/lvHZjvIyqsk?si=OtnuNPyo-8zqUW0A&amp;start=59",
  },
  {
    title: "Anti-Hero",
    url: "https://www.youtube.com/embed/b1kbLwvqugk?si=K9hipl5eoa4Hutgw",
  },
  {
    title: "Snow On The Beach (feat. Lana Del Rey)",
    url: "https://www.youtube.com/embed/ycE7bUq3-2k?si=TFLNDV-0u5PQmIcr",
  },
  {
    title: "You're On Your Own, Kid",
    url: "https://www.youtube.com/embed/7Gbg6Z70J7E?si=qIwl1F8ykIx4iXNL",
  },
  {
    title: "Midnight Rain",
    url: "https://www.youtube.com/embed/Odh9ddPUkEY?si=H-bq2RvKGZSQXvpg",
  },
  {
    title: "Question...?",
    url: "https://www.youtube.com/embed/xxrf_QBD5DE?si=cra7rKEeItWs3c0k",
  },
  {
    title: "Vigilante Shit",
    url: "https://www.youtube.com/embed/Uoey4W_3bos?si=IIOn83wH82CHjxgn",
  },
  {
    title: "Bejeweled",
    url: "https://www.youtube.com/embed/b7QlX3yR2xs?si=5YEC23tJOIKm4b6A",
  },
  {
    title: "Labyrinth",
    url: "https://www.youtube.com/embed/xTXsKMXUi7w?si=okjR_ut9Z0KdzWSO",
  },
  {
    title: "Karma",
    url: "https://www.youtube.com/embed/rg18Kf4en2o?si=sVKtL-iLBO_azNlk",
  },
  {
    title: "Sweet Nothing",
    url: "https://www.youtube.com/embed/rn0brgg2BpI?si=mBax7IgvmL4z3OZA",
  },
  {
    title: "Mastermind",
    url: "https://www.youtube.com/embed/Tmz1lz0zcLQ?si=RTC-5oqoK69dWUFa",
  },
  {
    title: "The Great War",
    url: "https://www.youtube.com/embed/iFX6_9h7th0?si=aOaHPlngHNzGrr8h",
  },
  {
    title: "Bigger Than The Whole Sky",
    url: "https://www.youtube.com/embed/l8Tps3PITx4?si=x3fvCrTKz0G0MWXf",
  },
  {
    title: "Paris",
    url: "https://www.youtube.com/embed/ySZGZrcqvr4?si=5DsrKAj173LsgBAN",
  },
  {
    title: "High Infidelity",
    url: "https://www.youtube.com/embed/-qee6dFKlw4?si=124dJyXeFP2pN-9g",
  },
  {
    title: "Glitch",
    url: "https://www.youtube.com/embed/Y2a73EvnZ4s?si=aXH_BqqmlRHhkfsh",
  },
  {
    title: "Would've, Could've, Should've",
    url: "https://www.youtube.com/embed/B-MfwP_RmHY?si=aUsDzaEKDDWYzTw5",
  },
  {
    title: "Dear Reader",
    url: "https://www.youtube.com/embed/X0Jti9F-oQA?si=uBW1ZR5e062oiBJR",
  },
  {
    title: "Hits Different",
    url: "https://www.youtube.com/embed/_f4yoKJL7IQ?si=QHXwOiIoGJL_UME4",
  },
  {
    title: "Snow On The Beach (Feat. More Lana Del Rey)",
    url: "https://www.youtube.com/embed/2CnUYMmEHrs?si=2uK-zJFAJUY6K-yd",
  },
  {
    title: "Karma (feat. Ice Spice)",
    url: "https://www.youtube.com/embed/XzOvgu3GPwY?si=6hR3tRh_DgKsTwaR",
  },
  {
    title: "You're Losing Me (From The Vault)",
    url: "https://www.youtube.com/embed/pQq9eP5OFhw?si=CgS58fpF_QvDGCa1",
  },
];

const ttpdTrackList = [
  {
    title: "Fortnight (feat. Post Malone)",
    url: "https://www.youtube.com/embed/q3zqJs7JUCQ?si=jZ5jtMGa94DMsNcN",
  },
  {
    title: "The Tortured Poets Department",
    url: "https://www.youtube.com/embed/RQMz4JDbtmI?si=8aL2796LDzn_P3Pi",
  },
  {
    title: "My Boy Only Breaks His Favorite Toys",
    url: "https://www.youtube.com/embed/wRKXAAV6jh4?si=B9CgIIs28GVQ5dyh",
  },
  {
    title: "Down Bad",
    url: "https://www.youtube.com/embed/EVbtjaWXQVg?si=GCVid746WnKpB5af",
  },
  {
    title: "So Long, London",
    url: "https://www.youtube.com/embed/CCUr2pNJft4?si=qJro6dQ1dB0PpOP0",
  },
  {
    title: "But Daddy I Love Him",
    url: "https://www.youtube.com/embed/U2W173hRfyA?si=3tAv55qHZ_PlO6oS",
  },
  {
    title: "Fresh Out The Slammer",
    url: "https://www.youtube.com/embed/0EKbEP2L32M?si=benXaKfOL0kO1cjp",
  },
  {
    title: "Florida!!! (feat. Florence + The Machine)",
    url: "https://www.youtube.com/embed/uEssK8o3jKg?si=8cCyFzc4FxRpVtxt",
  },
  {
    title: "Guilty as Sin",
    url: "https://www.youtube.com/embed/OOYlWF6V8t8?si=ypp_gntkJja4XM0e",
  },
  {
    title: "Who’s Afraid of Little Old Me?",
    url: "https://www.youtube.com/embed/vOZFiX6hDXQ?si=wuXcj5QmwQ3Xpap6",
  },
  {
    title: "I Can Fix Him (No Really I Can)",
    url: "https://www.youtube.com/embed/OKWfv-x2rdU?si=neXn9rrfiv0xlhwp",
  },
  {
    title: "loml",
    url: "https://www.youtube.com/embed/GZ4vaTRn0HU?si=i-JzEtuvNM7eddUs",
  },
  {
    title: "I Can Do It With a Broken Heart",
    url: "https://www.youtube.com/embed/i8_w_m6HLJ0?si=vMBzKUdgcLG9Qu8N",
  },
  {
    title: "The Smallest Man Who Ever Lived",
    url: "https://www.youtube.com/embed/Atdzfj8LcuY?si=1sA9ms09WNvZ0JjI",
    defaultUrl:
      "https://www.youtube.com/embed/Atdzfj8LcuY?si=n0ajVJw9El1YjsTq&amp;start=146",
  },
  {
    title: "The Alchemy",
    url: "https://www.youtube.com/embed/iMMUAd66vxo?si=rF-fVu0HzlXan5QR",
  },
  {
    title: "Clara Bow",
    url: "https://www.youtube.com/embed/fcVUbmdQfaE?si=X5PJfMJZ-zbXvp5U",
  },
  {
    title: "The Black Dog",
    url: "https://www.youtube.com/embed/56TZ3B8Qxsk?si=gPzZaKXbnmVGF790",
  },
  {
    title: "imgonnagetyouback",
    url: "https://www.youtube.com/embed/SBGdvxi2JmU?si=hNIlOruGypqr37rW",
  },
  {
    title: "The Albatross",
    url: "https://www.youtube.com/embed/4wOsiM2T_xc?si=LBuJb_TY3Jei1dVk",
  },
  {
    title: "Chloe or Sam or Sophia or Marcus",
    url: "https://www.youtube.com/embed/gOtOWeD9YJk?si=XAuH1wjq_lmyrNj_",
  },
  {
    title: "How Did It End?",
    url: "https://www.youtube.com/embed/O3wlMR0y4a4?si=VnBRAShin8RpL0sv",
  },
  {
    title: "So High School",
    url: "https://www.youtube.com/embed/w-FkV0EM_CU?si=O2y8kqE6ht3qq35B",
  },
  {
    title: "I Hate It Here",
    url: "https://www.youtube.com/embed/BpkmUfv1I4Q?si=6Ra-Qfg7rHOVFjtM",
  },
  {
    title: "thanK you aIMee",
    url: "https://www.youtube.com/embed/oaBJlKXBvjk?si=5PntNvzJmhfsV-i8",
  },
  {
    title: "I Look in People's Windows",
    url: "https://www.youtube.com/embed/6HIA7ouBfGY?si=0h9KszzGcORSFKH6",
  },
  {
    title: "The Prophecy",
    url: "https://www.youtube.com/embed/_PsBoqNwYo4?si=FOayBqbzVl9t6JUN",
  },
  {
    title: "Cassandra",
    url: "https://www.youtube.com/embed/0hYY86DmqPY?si=FUCApUWgjUQNCgWL",
  },
  {
    title: "Peter",
    url: "https://www.youtube.com/embed/Mxxswu7V1Us?si=cPqK0FhHv-N4GjnE",
  },
  {
    title: "The Bolter",
    url: "https://www.youtube.com/embed/bAi80EylyXQ?si=mCTFSDIZhdWXf1Os",
  },
  {
    title: "Robin",
    url: "https://www.youtube.com/embed/FQyEZZPbOb0?si=zPLjU-0fdflKHHWS",
  },
  {
    title: "The Manuscript",
    url: "https://www.youtube.com/embed/iY6Qhlua8Zw?si=YHJ7_ykBkK1ZP7FC",
  },
  {
    title: "Fortnight (feat Post Malone) (BLOND:ISH Remix)",
    url: "https://www.youtube.com/embed/KJXP13hqf2I?si=dOfwwa8sGCM4U4Rr",
  },
  {
    title: "Fortnight (feat. Post Malone) (Acoustic)",
    url: "https://www.youtube.com/embed/HZIg5sQrPAM?si=HGrDXNAjUjInPcDn",
  },
  {
    title: "Fortnight (feat. Post Malone) (Cults Remix)",
    url: "https://www.youtube.com/embed/PQTA-EVc5DI?si=iuUYYfqy1V9ZcrrC",
  },
];

const ttpdNotes =
  "Tracks 1-15 are on The Tortured Poets Department, while the first 15 tracks plus tracks 16-31 are on The Tortured Poets Department: The Anthology, released two hours after the first album. Tracks 32 and above are just remixes and extra versions of the songs. Since the release of The Anthology, Taylor Swift has been releasing other versions of the songs, like voice memos and live ones from the Eras Tour, but they are not included here because they are not available on YouTube.";

const aimeeNotes = `As you have observed from track 24's song title "thanK you aIMee", the capitalized letters spell out "Kim", which is an indirect address to Kim Kardashian. In this song, Taylor Swift expresses her frustration with Aimee (who may or may not be Kim Kardashian) for always bringing her down but ultimately thanks Aimee for making her stronger. Recall that in Taylor's reputation era, Kim Kardashian was the root of all the hate that Taylor was getting at the time, so this song metaphorically describes Kim's bullying towards Taylor and Taylor's healing journey from it.`;

export const trackListsArr = [
  {
    trackList: debutTrackList,
    // bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,

    trackListLength: debutTrackList.length,
  },
  {
    trackList: fearlessTVTrackList,
    // vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    // bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,

    trackListLength: fearlessTVTrackList.length,
  },
  {
    trackList: speakNowTVTrackList,
    // bonusTrackList: debutBonusTrackList,
    defaultTrackIndex: 8,

    trackListLength: speakNowTVTrackList.length,
  },
  {
    trackList: redTVTrackList,
    defaultTrackIndex: 29,
    trackListLength: redTVTrackList.length,
  },
  {
    trackList: _1989TVTrackList,
    defaultTrackIndex: 2,

    trackListLength: _1989TVTrackList.length,
  },
  {
    trackList: reputationTrackList,
    bonusDesc: fiftyShadesDesc,
    defaultTrackIndex: 11,
    trackListLength: reputationTrackList.length,
  },
  {
    trackList: loverTrackList,
    bonusDesc: track5Note,
    defaultTrackIndex: 12,
    trackListLength: loverTrackList.length,
  },
  {
    trackList: folkloreTrackList,
    defaultTrackIndex: 1,

    trackListLength: folkloreTrackList.length,
  },
  {
    trackList: evermoreTrackList,
    defaultTrackIndex: 4,

    trackListLength: evermoreTrackList.length,
  },
  {
    trackList: midnightsTrackList,
    defaultTrackIndex: 1,

    trackListLength: midnightsTrackList.length,
  },
  {
    trackList: ttpdTrackList,
    vaultDesc: ttpdNotes,
    bonusDesc: aimeeNotes,
    defaultTrackIndex: 13,
    trackListLength: ttpdTrackList.length,
  },
];

export const allTracks: Array<TrackAlbum> = [];

trackListsArr.forEach((album, albumIndex) => {
  album.trackList.forEach(({ title, url }, index) => {
    allTracks.push({
      idx: index,
      title,
      trackId: createTrackId(title),
      url,
      length: album.trackListLength,
      albumNumber: albumIndex,
      albumPath: albums[albumIndex],
    });
  });
});

// Sort the allTracks array by title
allTracks.sort((a, b) => a.title.localeCompare(b.title));

export const trackListId = [
  "tracksTaylorSwift",
  "tracksFearlessTV",
  "tracksSpeakNowTV",
  "tracksRedTV",
  "tracks1989TV",
  "tracksReputation",
  "tracksLover",
  "tracksFolklore",
  "tracksEvermore",
  "tracksMidnights",
  "tracksTTPD",
]
