export interface Person {
  name: string;
  /** Optional link for the name, e.g. a personal website */
  url?: string;
}

/** A single person (name + optional url), or several people joined with "&" */
export type Credit = { role: string } & (Person | { people: Person[] });

export interface Video {
  streamUid: string;
  poster: string;
}

export interface Project {
  title: string;
  /** URL path segment for the project's page, e.g. "chulengo" -> /chulengo */
  slug: string;
  mp4: string;
  poster: string;
  /** Cloudflare Stream video ID; without one the page shows the poster still */
  streamUid?: string;
  /** Poster for the page's own player, when it should differ from the grid tile's */
  playerPoster?: string;
  /** Stills grid; with a streamUid the video leads it. Base paths with -960.jpg / -1920.jpg versions */
  gallery?: string[];
  /** More videos shown on the same page, below the main one */
  extraVideos?: Video[];
  description?: string;
  /** Justin's role on the project, e.g. "Director / Editor"; shown in the Selected Work list */
  role?: string;
  /** Year of release, e.g. "2010" */
  year?: string;
  /** What it was shot on, e.g. "Super 16mm" */
  format?: string;
  /** Runtime, e.g. "1:25" */
  length?: string;
  /** Short line shown above the synopsis */
  tagline?: string;
  /**
   * About the project; separate paragraphs with a blank line.
   * Links: [text](https://example.com) or [text](/project-slug)
   */
  blurb?: string;
  credits?: Credit[];
  /** Related link shown under the project details, e.g. a campaign site */
  link?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    title: "The Earthwalker",
    slug: "the-earthwalker",
    streamUid: "b293d331f0b8237f76c56511697339cb",
    role: "Director / Editor",
    mp4: "/Motion%20Thumbs/EW_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/5c659604-844f-48bb-85c6-a5032cae8500/public",
    year: "2026",
    format: "Video",
    length: "21:57",
    credits: [
      { role: "Directed & Edited by", name: "Justin Rosengarten" },
      { role: "Original Score", name: "Shaun Finnegan", url: "https://www.consolomusic.com/" },
      { role: "Sound Design", name: "Ignacio Bonet", url: "https://bonetstudio.com/" },
      { role: "Post Services", name: "Magen Entertainment", url: "https://magenentertainment.com/" },
      { role: "Color", name: "Gonzalo Greco", url: "https://grecocolorgrading.com/" },
    ],
    tagline: "Richness in a Life Well-Wandered",
    blurb: `The Earthwalker is a short documentary about the courage of personal choice — the rewards and sacrifices of a persistent vision, and healing through a deeper connection with nature. At its heart, it's a love story.

The film follows environmentalist and explorer Paul Coleman and his wife, author Konomi Kikuchi, as they build a life of radical sustainability in a remote region of Patagonia, Chile.

This film took me to the ends of the Earth — again — and stands as an energetic character study of the self-made, resilient world these two have built. It's a portrait of unity over fragmentation: a way of seeing, and a way of living, and a glimpse of what's possible.`,
  },
  {
    title: "National Forest Foundation",
    slug: "national-forest-foundation",
    role: "Producer / Editor",
    streamUid: "fe2c4f7d1112b7bb42bbfff253fe6756",
    extraVideos: [
      {
        streamUid: "368caf33185907025d5094aa07eb566f",
        poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/bec2f37d-f910-4080-a6eb-0bd9887ccf00/public",
      },
      {
        streamUid: "c899def71126b1a46757c460324e7b01",
        poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/e21829d1-ada7-43d8-cd1c-77b149620600/public",
      },
      {
        streamUid: "8e22ba5eabd1cd1615c268d10c754192",
        poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/4ae6e7e9-9106-4a00-66e3-370442888900/public",
      },
    ],
    mp4: "/Motion%20Thumbs/NFF_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/907cd9bb-35ef-4bea-98e0-5309dd495b00/public",
    year: "2024",
    format: "Video",
    length: "2:17, 2:19, 2:17, 2:20",
    link: { label: "Campaign", url: "https://natureconnectsus.org/" },
    credits: [
      {
        role: "Produced by",
        people: [
          { name: "Justin Rosengarten" },
          { name: "Thom Schroeder", url: "https://woolleycreative.com/" },
        ],
      },
      { role: "Edited by", name: "Justin Rosengarten" },
    ],
    blurb: `[Nature Connects Us](https://natureconnectsus.org/) is a national campaign commissioned by the National Forest Foundation, celebrating our connection to national forests and grasslands through a sense of place. The four-part series honored people who steward these lands and their inhabitants: [Rodney Stotts](https://www.birdmanrodney.com/about), [Jade Begay](https://www.jadebegay.com/about-us-sonora), [Dani Reyes-Acosta](https://danireyesacosta.com/), and [Dr. Len Necefer](https://drlennecefer.com/).

This was a major producing effort, in partnership with [Thom Schroeder](https://woolleycreative.com/) of [Woolley Creative](https://woolleycreative.com/). We tracked down four distinct voices who fit the campaign, then designed an experience with each that would carry the story they wanted to tell. We traveled to four states — climbing mountains in the Sierras, traversing canyons in New Mexico.

The real challenge was maintaining visual continuity across four very different landscapes, while holding a consistent tone through the editing and messaging.`,
  },
  {
    title: "The Law",
    slug: "the-law",
    role: "Camera Operator",
    mp4: "/Motion%20Thumbs/THE-LAW_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/ba180138-e3bc-4c68-a95f-4828a855d800/public",
    year: "2023",
    format: "Video",
    length: "TBD", // PLACEHOLDER — add once the video is on Cloudflare
    credits: [
      { role: "Directed by", name: "Jay Kolsch", url: "https://www.jaykolsch.com/" },
      {
        role: "Produced by",
        people: [
          { name: "Jay Kolsch", url: "https://www.jaykolsch.com/" },
          { name: "Christine Walsh" },
        ],
      },
      { role: "Director of Photography", name: "Jay Kolsch", url: "https://www.jaykolsch.com/" },
      { role: "Camera Operator", name: "Justin Rosengarten" },
      { role: "Assistant Camera", name: "Luke Hall", url: "https://www.lukebhall.com/" },
    ],
    blurb: `Photographer [Jay Kolsch](https://www.jaykolsch.com/)'s fascination with the Alaskan wilderness — and with the mushers who run the Iditarod each year — is what brought us to Anchorage and Fairbanks in the winter of 2023.

Jay's background in cinema and fashion, paired with a deep love of the outdoors, shaped a striking, singular rendering of the world of dog care and mushing. His direction produced haunting images that still pulse with life.

The Law was one of the most extraordinary shooting experiences of my career: sub-zero temperatures, dozens of energetic dogs, and wild night rides — no harness, flat on my back on a sled, rocketing through the woods along the Iditarod trail. I'll never forget it.

The final work was never completed, but the images persist — a testament to Jay's incredible eye and his vision for this unseen world.`,
  },
  {
    title: "Search Nurture",
    slug: "search-nurture",
    role: "Director / Cinematographer",
    streamUid: "293461f1a59c8a982c8f5d6e5050e7c1",
    mp4: "/Motion%20Thumbs/SEARCH-NURTURE_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/8252cbcb-0866-4fb7-544d-fa985a32c300/public",
    year: "2022",
    format: "Video",
    length: "3:22",
    credits: [
      { role: "Directed & Shot by", name: "Justin Rosengarten" },
    ],
    blurb: `Search Nurture is a San Francisco marketing company founded by Spencer Padway.

Spencer hired me to direct and shoot a series of videos about his company's distinctive culture — fully remote, with unlimited PTO and a mental-health-first approach to leadership.

Spencer and I produced the video together, shot across four states in seven days — a real lesson in building and maintaining visual consistency across different cultural contexts and natural lighting conditions.

The result captures Spencer's forward-thinking philosophy, told from his perspective and that of his leadership team. The video served primarily as a recruitment tool, giving prospective employees a real sense of Search Nurture's ethos so they could decide whether it was the right fit for them.`,
  },
  {
    title: "Music Composed By",
    slug: "music-composed-by",
    role: "Director / Editor",
    streamUid: "c20c521723d7a0f9812c1258ad03402f",
    mp4: "/Motion%20Thumbs/COMPOSED-BY_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/8564afcb-2eff-4b84-131a-626a7ffb8e00/public",
    year: "2022",
    format: "Video & Found Footage",
    length: "1:36",
    credits: [
      { role: "Directed & Edited by", name: "Justin Rosengarten" },
      { role: "Music Composed by", name: "Shaun Finnegan", url: "https://www.consolomusic.com/" },
    ],
    blurb: `Music Composed By is a glimpse into the mind and talent of composer [Shaun Finnegan](https://www.consolomusic.com/). Shaun has been writing music his entire life, and his genius — my words, not his — lies in a rare mix of deep competency and open curiosity, a constant, gentle pursuit of knowledge that gives his music its emotion and resonance.

I've had the privilege of working with Shaun for most of my artistic career; his music touches nearly everything I've ever made. I was honored to direct and edit this short about him.

The most recent project we made together is the documentary short [The Earthwalker](/the-earthwalker) — out now, and pulsing with a score only Shaun could have written.`,
  },
  {
    title: "Midnight Bagel",
    slug: "midnight-bagel",
    role: "Director / Cinematographer",
    streamUid: "d8b389e1be4216ca9883b81e1e23a853",
    playerPoster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/18b591b5-d2e2-491e-bff3-62ed0c28c300/public",
    // The video leads the grid (in place of still 15); stills follow in this order
    gallery: ["13", "14", "16", "17", "18", "19", "20", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(
      (n) => `/Stills/midnight-bagel/${n}`
    ),
    mp4: "/Motion%20Thumbs/BAKING_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/f57ac85a-07f9-46a9-c923-3dddf8455500/public",
    year: "2021",
    format: "Video",
    length: "2:19",
    credits: [
      { role: "Directed & Shot by", name: "Justin Rosengarten" },
    ],
    blurb: `Freshly launched back into the film industry after a decade of baking bread, I was eager to start making work — and to me, the obvious story worth telling was life in a bakery.

Having recently moved to San Francisco, I was perfectly placed to follow some of the best bread bakers in the world, along with the unsung heroes of the Mission's baking scene — the witching-hour warriors at Dianda's and Jelly Donut.

The central figure was Nick Beitcher, former head baker at Tartine and founder of Midnight Bagel. Nick was someone I knew from my years in the baking world, and he agreed to participate — though I came to realize it was more out of loyalty than any real desire to make the film. Understanding his position, and that he needed to focus on his team and his work, I let the project go.

It never came to fruition. But this early attempt, after years away, got the wheels turning again — and it reminded me of what making a film demands, and what to stay mindful of. Above all: a subject's own reasons and appetite for being involved.

What remains is a series of images that pay homage to the San Francisco baking scene without telling its story. One day, when the time is right, I intend to return to it.`,
  },
  {
    title: "In and for the Wild",
    slug: "chulengo",
    role: "Director / Cinematographer",
    streamUid: "db381f3618a1a96926a4ca24ef8f75ed",
    mp4: "/Motion%20Thumbs/CHULENGO_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/cfba874b-0ba0-4072-9469-031671902b00/public",
    year: "2022",
    format: "Video",
    length: "0:52",
    credits: [
      { role: "Directed & Shot by", name: "Justin Rosengarten" },
      { role: "Music Composed by", name: "Shaun Finnegan", url: "https://www.consolomusic.com/" },
    ],
    blurb: `In and for the Wild is a video about [Chulengo Expeditions](https://chulengo.org/), the life's work of conservationist Nadine Lehner. Nadine has built one of the most remarkable and far-flung adventure touring groups in the world, and she was instrumental in establishing Patagonia National Park — the 700,000-acre flagship reserve that's home to most of Chulengo's expeditions.

I was invited to create branded content capturing the energy and intent of a Chulengo expedition. For ten days I traveled on foot with 80 pounds of gear on my back, camera in hand, documenting the reality of crossing the landscape in one of the most rugged and beautiful places on Earth.

We persevered — but it was a fast lesson in overpacking. There's always a fine line between over-prepared and prepared, and experience is what tells the difference.

This trip is what led me back to film a year later — deepening the interest that eventually brought me to work with Paul and his wife Konomi on [The Earthwalker](/the-earthwalker).`,
  },
  {
    title: "Away Where?",
    slug: "away-where",
    role: "Director / Editor",
    streamUid: "aaa83723deb3de245542dd53a03bd3e2",
    mp4: "/Motion%20Thumbs/AWAY-WHERE_MOTION-THUMB.mp4",
    poster: "https://imagedelivery.net/LngsP1G4XrZYr43CIDhlJw/4a97ae56-ed77-40b1-1491-241d8b558700/public",
    year: "2021",
    format: "Found footage",
    length: "2:00",
    credits: [
      { role: "Directed & Edited by", name: "Justin Rosengarten" },
      { role: "Music Composed by", name: "Shaun Finnegan", url: "https://www.consolomusic.com/" },
    ],
    blurb: `Away Where? is a short film about the chemical dangers lurking in our water supply, made for the annual short film competition run by the non-profit [Let's Talk About Water](https://letstalkaboutwater.org/).

The competition challenges filmmakers to take complex ideas from scientific literature and communicate them to a general audience through the language of cinema.

Justin's film placed third. It's built entirely from public-domain found footage sourced from the Internet Archive — an approach of translating abstract ideas into visual metaphor that has shaped his style ever since.`,
  },
];
