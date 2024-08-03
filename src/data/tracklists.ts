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
];

const debutBonusTrackList = [
  {
    title: "Crazier",
    url: "https://www.youtube.com/embed/B0p4Lv0t124?si=afSna_Jt3Wwj_usC&amp;start=96",
  },
];

const debutBonusTrackDesc =
  "Taylor Swift wrote and sang Crazier for Hannah Montana: The Movie and is actually not part of this album. However, we, the Swifties, hope for this song to make it to the Taylor's Version of this album as she recently sang this song at the Eras Tour in June 2024.";

export const fearlessTVTrackList = [
  {
    title: "Fearless (Taylor's Version)",
    url: "https://www.youtube.com/embed/7lLigiVgJsE?si=SCcavwK9PaG0pDz_",
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
];

const fearlessTVVaultTrackList = [
  {
    title: "You All Over Me (feat. Maren Morris) (From The Vault)",
    url: "https://www.youtube.com/embed/XKaMUm7YwZc?si=cPWslOmKezY4TXSP",
  },
  {
    title: "Mr. Perfectly Fine (From The Vault)",
    url: "https://www.youtube.com/embed/rFjJs6ZjPe8?si=BWYEkBmLcWIk5353",
  },
  {
    title: "We Were Happy (From The Vault)",
    url: "https://www.youtube.com/embed/seU5y5EgIwk?si=ct2w2sl17Ir3IQaB",
  },
  {
    title: "That’s When (feat. Keith Urban) (From The Vault)",
    url: "https://www.youtube.com/embed/aOa6D6ku3dM?si=4Xv6DAh5KyX503Nk",
  },
  {
    title: "Don’t You (From The Vault)",
    url: "https://www.youtube.com/embed/dHdAN4FXzmc?si=fjSzt1-QZ111bi5H",
  },
  {
    title: "Bye Bye Baby (From The Vault)",
    url: "https://www.youtube.com/embed/yuFuwXd-B9E?si=7TzS39RimSDeQukO",
  },
];

const vaultTrackDescription = `Vault tracks refer to Taylor Swift's songs that did not make it to the stolen versions of the first six albums but made it to the Taylor's Versions of the same albums. Simply put, when Taylor releases a Taylor's Version of an album, she includes all of the existing songs from the stolen version of the album with Taylor's Version in parentheses next to the titles, plus the additional vault tracks or songs that she had written at the time but did not make it onto the stolen version of the album. Since these vault tracks from an album did not exist until the release of Taylor's Version of the album, there is no need to annotate the titles with (Taylor's Version); instead, they are usually annotated with (From the Vault). The purpose of Taylor's Version in parentheses next to song titles is to differentiate them from the stolen versions of the songs.`;

const fearlessTVBonusTrackList = [
  {
    title: "Bonus Track: Love Story (Taylor’s Version) - Elvira Remix",
    url: "https://www.youtube.com/embed/FeTHyZJvozc?si=mKdF5k1IGrzfHDNE",
  },
];

export const trackListsArr = [
  {
    trackList: debutTrackList,
    bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
  {
    trackList: debutTrackList,
    bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
  {
    trackList: debutTrackList,
    bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
  {
    trackList: debutTrackList,
    bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
  {
    trackList: debutTrackList,
    bonusTrackList: debutBonusTrackList,
    bonusDesc: debutBonusTrackDesc,
    defaultTrackIndex: 2,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
  {
    trackList: fearlessTVTrackList,
    vaultTrackList: fearlessTVVaultTrackList,
    vaultDesc: vaultTrackDescription,
    bonusTrackList: fearlessTVBonusTrackList,
    defaultTrackIndex: 0,
  },
];
