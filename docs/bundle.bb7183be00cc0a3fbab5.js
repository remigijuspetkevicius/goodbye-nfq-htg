!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    n.d(t, "a", function () {
      return i;
    });
    var a = {},
      i = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : e.random();
          r(this, e),
            (this.name = t),
            a[t]
              ? (this.img = a[t].cloneNode())
              : ((this.img = new Image()),
                (this.img.src = n(9)("./".concat(t, ".svg")).default),
                (a[t] = this.img));
        }
        var t, i, s;
        return (
          (t = e),
          (s = [
            {
              key: "preload",
              value: function () {
                e.symbols.forEach(function (t) {
                  return new e(t);
                });
              },
            },
            {
              key: "random",
              value: function () {
                return this.symbols[
                  Math.floor(Math.random() * this.symbols.length)
                ];
              },
            },
            {
              key: "symbols",
              get: function () {
                return [
                  "at_at",
                  "c3po",
                  "darth_vader",
                  "death_star",
                  "falcon",
                  "r2d2",
                  "stormtrooper",
                  "tie_ln",
                  "yoda",
                ];
              },
            },
          ]),
          (i = null) && o(t.prototype, i),
          s && o(t, s),
          e
        );
      })();
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n(3),
        o = n(0);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var s = (function () {
        function t(e) {
          var n = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          a(this, t),
            o.a.preload(),
            (this.isWinSpin = !1),
            (this.maxNextWin = 3),
            (this.currentSpin = 0),
            (this.winSpin = this.random(this.maxNextWin)),
            (this.currentSymbols = [
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
            ]),
            (this.nextSymbols = [
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
              ["death_star", "death_star", "death_star"],
            ]),
            (this.container = e),
            (this.reels = Array.from(
              this.container.getElementsByClassName("reel")
            ).map(function (e, t) {
              return new r.a(e, t, n.currentSymbols[t]);
            })),
            (this.spinButton = document.getElementById("slot-trigger")),
            this.spinButton.addEventListener("click", function () {
              return n.spin();
            }),
            (this.modal = document.getElementById("uselessFacts")),
            i.inverted && this.container.classList.add("inverted"),
            (this.facts = [
              "It is impossible to lick your elbow.",
              "Intelligent people have more zinc and copper in their hair.",
              "In every episode of Seinfeld there is a Superman somewhere.",
              "Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.",
              "More than 50% of the people in the world have never made or received a telephone call.",
              "13% of Americans actually believe that some parts of the moon are made of cheese.",
              "The world's youngest parents were 8 and 9 and lived in China in 1910.",
              "Fish that live more than 800 meters below the ocean surface don't have eyes.",
              "Grapes explode when you put them in the microwave. Go on, try it then",
              "Ramses brand condom is named after the great pharaoh Ramses II who fathered over 160 children.",
              "Peanuts are one of the ingredients of dynamite.",
              "The average chocolate bar has 8 insects' legs in it.",
              "In York, it is perfectly legal to shoot a Scotsman with a bow and arrow (except on Sundays)",
              "No piece of square dry paper can be folded in half more than 7 times",
              "The average human eats 8 spiders in their lifetime at night.",
              "'Stewardesses' is the longest word typed with only the left hand.",
              "An average human loses about 200 head hairs per day.",
              "Mexico City sinks about 10 inches a year",
              "It's impossible to sneeze with your eyes open.",
              "In France, a five year old child can buy an alcoholic drink in a bar",
              "During the chariot scene in 'Ben Hur,' a small red car can be seen in the distance.",
              "Because metal was scarce, the Oscars given out during World War II were made of wood.",
              "By raising your legs slowly and lying on your back, you cannot sink into quicksand.",
              "Venus is the only planet that rotates clockwise.",
              "Charlie Chaplin once won third prize in a Charlie Chaplin look-alike contest.",
              "The glue on Israeli postage is certified kosher.",
              "In 10 minutes, a hurricane releases more energy than all of the world's nuclear weapons combined.",
              "On average, 100 people choke to death on ball-point pens every year.",
              "Thirty-five percent of the people who use personal ads for dating are already married.",
              "The electric chair was invented by a dentist.",
              "Bruce Lee was so fast that they actually had to s-l-o-w film down so you could see his moves.",
              "A Boeing 747s wingspan is longer than the Wright brother's first flight.",
              "Babies are born without knee caps. They don't appear until the child reaches 2-6 years of age.",
              "14% of all facts and statistics are made up and 27% of people know that fact.",
              "Every time you lick a stamp, you're consuming 1/10 of a calorie.",
              "Eskimos have over 15 words for the English word of 'Snow'",
              "Americans on the average eat 18 acres of pizza every day.",
              "Banging your head against a wall uses 150 calories an hour.",
              "On a Canadian two dollar bill, the flag flying over the Parliament buildings is an American flag.",
              "Almonds are a member of the peach family.",
              "The plastic things on the end of shoelaces are called aglets.",
              "“Ithyphallophobia' is a morbid fear of seeing, thinking about or having an erect penis.",
              "The average shelf-life of a latex condom is about two years.",
              "14% of Americans have skinny-dipped with a member of the opposite sex at least once.",
              "Male bats have the highest rate of homosexuality of any mammal.",
              "A man's beard grows fastest when he anticipates sex.",
              "A man will ejaculate approximately 18 quarts of semen in his lifetime.",
              "Sex is biochemically no different from eating large quantities of chocolate.",
              "Humans and dolphins are the only species that have sex for pleasure.",
              "For every 'normal' webpage, there are five porn pages.",
              "'Venus observa' is the technical term for the 'missionary position.'",
              "Sex is the safest tranquilizer in the world. IT IS 10 TIMES MORE EFFECTIVE THAN VALIUM.",
              "Samuel Clemens (Mark Twain) was born on and died on days when Halley’s Comet can be seen.",
              "US Dollar bills are made out of cotton and linen.",
              "The 57 on the Heinz ketchup bottle represents the number of pickle types the company once had.",
              "Americans are responsible for about 1/5 of the world’s garbage annually.",
              "Giraffes and rats can last longer without water than camels.",
              "Your stomach produces a new layer of mucus every two weeks so that it doesn’t digest itself.",
              "98% of all murders and rapes are by a close family member or friend of the victim.",
              "A B-25 bomber crashed into the 79th floor of the Empire State Building on July 28, 1945.",
              "The Declaration of Independence was written on hemp (marijuana) paper.",
              "The dot over the letter “i” is called a tittle.",
              "Benjamin Franklin was the fifth in a series of the youngest son of the youngest son.",
              "Triskaidekaphobia means fear of the number 13.",
              "Paraskevidekatriaphobia means fear of Friday the 13th, which occurs one to three times a year.",
              "In Italy, 17 is considered an unlucky number. In Japan, 4 is considered an unlucky number.",
              "A female ferret will die if it goes into heat and cannot find a mate.",
              "In ancient Rome, when a man testified in court he would swear on his testicles.",
              "The ZIP in “ZIP code” means Zoning Improvement Plan.",
              "Coca-Cola contained Coca (whose active ingredient is cocaine) from 1885 to 1903.",
              "A “2 by 4' is really 1 1/2 by 3 1/2.",
              "It’s estimated that at any one time around 0.7% of the world’s population is drunk.",
              "40% of McDonald’s profits come from the sales of Happy Meals.",
              "Every person, including identical twins, has a unique eye & tongue print along with their finger print.",
              "The “spot” on the 7-Up logo comes from its inventor who had red eyes. He was an albino.",
              "315 entries in Webster’s 1996 dictionary were misspelled.",
              "The “save” icon in Microsoft Office programs shows a floppy disk with the shutter on backwards.",
              "Albert Einstein and Charles Darwin both married their first cousins",
              "Camel’s have three eyelids.",
              "On average, 12 newborns will be given to the wrong parents every day.",
              "John Wilkes Booth’s brother once saved the life of Abraham Lincoln’s son.",
              "Warren Beatty and Shirley McLaine are brother and sister.",
              "Chocolate can kill dogs; it directly affects their heart and nervous system.",
              "Daniel Boone hated coonskin caps.",
              "55.1% of all US prisoners are in prison for drug offenses.",
              "Most lipstick contains fish scales.",
              "Dr. Seuss pronounced his name “soyce”.",
              "Slugs have four noses.",
              "Ketchup was sold in the 1830s as medicine.",
              "India has a Bill of Rights for cows.",
              "American Airlines saved $40,000 in 1987 by taking out an olive from First Class salads.",
              "About 200,000,000 M&Ms are sold each day in the United States.",
              "There are 318,979,564,000 possible combinations of the first four moves in Chess.",
              "There are no clocks in Las Vegas gambling casinos.",
              "Coconuts kill about 150 people each year. That’s more than sharks.",
              "Half of all bank robberies take place on a Friday.",
              "The name Wendy was made up for the book Peter Pan. There was never a recorded Wendy before it.",
              "The international telephone dialing code for Antarctica is 672.",
              "The first bomb the Allies dropped on Berlin in WWII killed the only elephant in the Berlin Zoo.",
              "The average raindrop falls at 7 miles per hour.",
              "If you put a drop of liquor on a scorpion, it will instantly go mad and sting itself to death.",
              "Bruce Lee was so fast that they had to slow the film down so you could see his moves.",
              "The first CD pressed in the US was Bruce Springsteen’s “Born in the USA”.",
              "IBM’s motto is “Think”. Apple later made their motto “Think different”.",
              "The original name for butterfly was flutterby.",
              "One in fourteen women in America is a natural blonde. Only one in sixteen men is.",
              "The Olympic was the sister ship of the Titanic, and she provided twenty-five years of service.",
              "When the Titanic sank, 2228 people were on it. Only 706 survived.",
              "Every day, 7% of the US eats at McDonald’s.",
              "During his entire life, Vincent Van Gogh sold exactly one painting, “Red Vineyard at Arles”.",
              "By raising your legs slowly and lying on your back, you cannot sink into quicksand.",
              "One in ten people live on an island.",
              "It takes more calories to eat a piece of celery than the celery has in it to begin with.",
              "28% of Africa is classified as wilderness. In North America, its 38%.",
              "Charlie Chaplin once won third prize in a Charlie Chaplin look-alike contest.",
              "Chewing gum while peeling onions will keep you from crying.",
              "Sherlock Holmes NEVER said “Elementary, my dear Watson”",
              "Humphrey Bogart NEVER said “Play it again, Sam” in Casablanca",
              "They NEVER said “Beam me up, Scotty” on Star Trek.",
              "Sharon Stone was the first Star Search spokes model.",
              "More people are afraid of open spaces (kenophobia) than of tight spaces (claustrophobia).",
              "There is a 1 in 4 chance that New York will have a white Christmas.",
              "The Guinness Book of Records holds the record for being the book most often stolen from Libraries.",
              "$203,000,000 is spent on barbed wire each year in the U.S.",
              "Every US president has worn glasses (just not always in public).",
              "Bats always turn left when exiting a cave.",
              "Jim Henson first coined the word “Muppet”. It is a combination of “marionette” and “puppet.”",
              "The Michelin man is known as Mr. Bib. His name was Bibendum in the company’s first ads in 1896.",
              "The word “lethologica” describes the state of not being able to remember the word you want.",
              "About 14% of injecting drug users are HIV positive.",
              "A word or sentence that is the same front and back (racecar, kayak) is called a “palindrome”.",
              "A snail can sleep for 3 years.",
              "People photocopying their buttocks are the cause of 23% of all photocopier faults worldwide.",
              "China has more English speakers than the United States.",
              "One in every 9000 people is an albino.",
              "You share your birthday with at least 9 million other people in the world.",
              "Everyday, more money is printed for Monopoly sets than for the U.S. Treasury.",
              "Every year 4 people in the UK die putting their trousers on.",
              "Cats have over one hundred vocal sounds; dogs only have about ten.",
              "Our eyes are always the same size from birth but our nose and ears never stop growing.",
              "In every episode of “Seinfeld” there is a Superman picture or reference somewhere.",
              "Rats multiply so quickly that in 18 months, two rats could have over million descendants.",
              "Each year in America there are about 300,000 deaths that can be attributed to obesity.",
              "About 55% of all movies are rated R.",
              "About 500 movies are made in the US and 800 in India annually.",
              "Arabic numerals are not really Arabic; they were created in India.",
              "The February of 1865 is the only month in recorded history not to have a full moon.",
              "There is actually no danger in swimming right after you eat, though it may feel uncomfortable.",
              "The cruise liner Queen Elizabeth II moves only six inches for each gallon of diesel that it burns.",
              "A shark is the only fish that can blink with both eyes.",
              "There are about 2 chickens for every human in the world.",
              "The word “maverick” came into use after Samuel Maverick, a Texan refused to brand his cattle.",
              "Two-thirds of the world’s eggplant is grown in New Jersey.",
              "On a Canadian two-dollar bill, the American flag is flying over the Parliament Building.",
              "An American urologist bought Napoleon’s penis for $40,000.",
              "No word in the English language rhymes with month, orange, silver, or purple.",
              "Dreamt is the only English word that ends in the letters “MT”.",
              "$283,200 is the absolute highest amount of money you can win on Jeopardy.",
              "Almonds are members of the peach family.",
              "Rats and horses can’t vomit.",
              "The penguin is the only bird that can’t fly but can swim.",
              "There are approximately 100 million acts of sexual intercourse each day.",
              "Winston Churchill was born in a ladies room during a dance.",
              "Maine is the only state whose name is just one syllable.",
              "Americans on average eat 18 acres of pizza every day.",
              "Every time you lick a stamp you consume 1/10 of a calorie.",
              "You are more likely to be killed by a champagne cork than by a poisonous spider.",
              "Hedenophobic means fear of pleasure.",
              "Ancient Egyptian priests would pluck every hair from their bodies.",
              "A crocodile cannot stick its tongue out.",
              "80% of burglaries are committed by people aged 13-21.",
              "An ant always falls over on its right side when intoxicated.",
              "All polar bears are left-handed.",
              "The catfish has over 27000 taste buds (more than any other animal)",
              "A cockroach will live nine days without its head before it starves to death.",
              "Butterflies taste with their feet.",
              "Elephants are the only mammals that cannot jump.",
              "An ostrich’s eye is bigger than its brain.",
              "Starfish have no brains.",
              "11% of the world is left-handed.",
              "Rubber bands last longer when refrigerated.",
              "The national anthem of Greece has 158 verses.",
              "There are 293 ways to make change for a dollar.",
              "A healthy (non-colorblind) human eye can distinguish between 500 shades of gray.",
              "A pregnant goldfish is called a twit.",
              "Lizards can self-amputate their tails for protection. It grows back after a few months.",
              "Los Angeles’ full name is “El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula”.",
              "A cat has 32 muscles in each ear.",
              "A honeybee can fly at fifteen miles per hour.",
              "Tigers have striped skin, not just striped fur.",
              "A “jiffy” is the scientific name for 1/100th of a second.",
              "The average child recognizes over 200 company logos by the time he enters first grade.",
              "The youngest pope ever was 11 years old.",
              "The first novel ever written on a typewriter is Tom Sawyer.",
              "One out of every 43 prisoners escapes from jail. 94% are recaptured.",
              "The average chocolate bar has 8 insects’ legs melted into it.",
              "A rhinoceros horn is made of compacted hair.",
              "Elwood Edwards did the voice for the AOL sound files (i.e. “You’ve got Mail!”).",
              "A polar bears skin is black. Its fur is actually clear, but like snow it appears white.",
              "Elvis had a twin brother named Garon, who died at birth, which is why Elvis middle name was Aron.",
              "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
              "Donkeys kill more people than plane crashes.",
              "Shakespeare invented the words “assassination” and “bump.”",
              "There are a million ants for every person on Earth.",
              "If you keep a goldfish in the dark room, it will eventually turn white.",
              "Women blink nearly twice as much as men.",
              "The name Jeep comes from “GP”, the army abbreviation for General Purpose.",
              "Right handed people live, on average, nine years longer than left handed people do.",
              "There are two credit cards for every person in the United States.",
              "Cats’ urine glows under a black light.",
              "A “quidnunc” is a person who is eager to know the latest news and gossip.",
              "Leonardo Da Vinci invented the scissors, the helicopter, and many other present day items.",
              "In the last 4000 years no new animals have been domesticated.",
              "25% of a human’s bones are in its feet.",
              "On average, 100 people choke to death on ballpoint pens every year.",
              "“Canada” is an Indian word meaning “Big Village”.",
              "Only one in two billion people will live to be 116 or older.",
              "Rape is reported every six minutes in the U.S.",
              "The human heart creates enough pressure in the bloodstream to squirt blood 30 feet.",
              "A jellyfish is 95% water.",
              "Truck driving is the most dangerous occupation by accidental deaths (799 in 2001).",
              "Elephants only sleep for two hours each day.",
              "On average people fear spiders more than they do death.",
              "The strongest muscle in the human body is the tongue. (the heart is not a muscle)",
              "In golf, a ‘Bo Derek’ is a score of 10.",
              "In the U.S, Frisbees outsell footballs, baseballs and basketballs combined.",
              "In most watch advertisements the time displayed on a watch is 10:10.",
              "If you plant an apple seed, it is almost guaranteed to grow a tree of a different type of apple.",
              "Al Capone’s business card said he was a used furniture dealer.",
              "The only real person to be a PEZ head was Betsy Ross.",
              "There are about 450 types of cheese in the world. 240 come from France.",
              "A dragonfly has a lifespan of 24 hours.",
              "In Iceland, a Big Mac costs $5.50.",
              "Broccoli and cauliflower are the only vegetables that are flowers.",
              "There is no solid proof of who built the Taj Mahal.",
              "In a survey of 200000 ostriches over 80 years, not one tried to bury its head in the sand.",
              "A dime has 118 ridges around the edge. A quarter has 119.",
              "”Judge Judy” has a $25,000,000 salary, while Supreme Court Justice Ginsberg has a $190,100 salary.",
              "Andorra, a tiny country between France & Spain, has the longest average lifespan: 83.49 years.",
              "Mr. Rogers was an ordained Presbyterian minister.",
              "In America you will see an average of 500 advertisements a day.",
              "John Lennon’s first girlfriend was named Thelma Pickles.",
              "You can lead a cow upstairs but not downstairs.",
              "The average person falls asleep in seven minutes.",
              "“The sixth sick sheik’s sixth sheep’s sick” is said to be the toughest tongue twister in English.",
              "There are 336 dimples on a regulation US golf ball. In the UK its 330.",
              "“Duff” is the decaying organic matter found on a forest floor.",
              "The US has more personal computers than the next 7 countries combined.",
              "Kuwait is about 60% male (highest in the world). Latvia is about 54% female (highest in the world).",
              "The Hawaiian alphabet has only 12 letters.",
              "In 10 minutes, a hurricane releases more energy than all the world’s nuclear weapons combined.",
              "At the height of its power in 400 BC, the Greek city of Sparta had 25,000 citizens and 500,000 slaves.",
              "Julius Caesar’s autograph is worth about $2,000,000.",
              "People say “bless you” when you sneeze because your heart stops for a millisecond.",
              "US gold coins used to say “In Gold We Trust”.",
              "In “Silence of the Lambs”, Hannibal Lector (Anthony Hopkins) never blinks.",
              "A shrimp’s heart is in its head.",
              "In the 17th century, the value of pi was known to 35 decimal places. Today, to 1.2411 trillion.",
              "Pearls melt in vinegar.",
              "“Lassie” was played by a group of male dogs; the main one was named Pal.",
              "Nepal is the only country that doesn’t have a rectangular flag.",
              "Switzerland is the only country with a square flag.",
              "Gabriel, Michael, and Lucifer are the only angels named in the Bible.",
              "Johnny Appleseed planted apples so that people could use apple cider to make alcohol.",
              "Abraham Lincoln’s ghost is said to haunt the White House.",
              "God is not mentioned once in the book of Esther.",
              "The odds of being born male are about 51.2%, according to census.",
              "Scotland has more redheads than any other part of the world.",
              "There is an average of 61,000 people airborne over the US at any given moment.",
              "Prince Charles and Prince William never travel on the same airplane in case there is a crash.",
              "The most popular first name in the world is Muhammad.",
              "The surface of the Earth is about 60% water and 10% ice.",
              "For every 230 cars that are made, 1 will be stolen.",
              "Jimmy Carter was the first U.S. President to be born in a hospital.",
              "Lightning strikes the earth about 8 million times a day.",
              "Humans use a total of 72 different muscles in speech.",
              "If you feed a seagull Alka-Seltzer, its stomach will explode.",
              "Only female mosquitoes bite.",
              "The U.S. Post Office handles 43 percent of the world’s mail.",
              "Most household dust is made of dead skin cells.",
              "One in eight million people has progeria, a disease that causes people to grow faster than they age.",
              "The male seahorse carries the eggs until they hatch instead of the female.",
              "Negative emotions such as anxiety and depression can weaken your immune system.",
              "Stephen Hawking was born exactly 300 years after Galileo died.",
              "Mercury is the only planet whose orbit is coplanar with its equator.",
              "Venus and Uranus are the only planets that rotate opposite to the direction of their orbit.",
              "John Adams, Thomas Jefferson, and James Monroe died on July 4th.",
              "Baby Ruth candy bar was named after Grover Cleveland’s daughter, Ruth, not the baseball player.",
              "Dolphins can look in different directions with each eye. They can sleep with one eye open.",
              "The Falkland Isles (pop. about 2000) has over 700000 sheep (350 per person).",
              "There are 41,806 different spoken languages in the world today.",
              "The city of Venice stands on about 120 small islands.",
              "The past-tense of the English word “dare” is “durst”",
              "Beetles taste like apples, wasps like pine nuts, and worms like fried bacon.",
              "Of all the words in the English language, the word 'set' has the most definitions!",
              "What is called a 'French kiss' in the English speaking world is known as an 'English kiss' in France.",
              "'Almost' is the longest word in the English language with all the letters in alphabetical order.",
              "'Rhythm' is the longest English word without a vowel.",
              "In 1386, a pig in France was executed by public hanging for the murder of a child",
              "A cockroach can live several weeks with its head cut off!",
              "Human thigh bones are stronger than concrete.",
              "You can't kill yourself by holding your breath",
              "There is a city called Rome on every continent.",
              "Your heart beats over 100,000 times a day!",
              "The skeleton of Jeremy Bentham is present at all important meetings of the University of London",
              "Right handed people live, on average, nine years longer than left-handed people",
              "Your ribs move about 5 million times a year, every time you breathe!",
              "One quarter of the bones in your body, are in your feet!",
              "Like fingerprints, everyone's tongue print is different!",
              "Fingernails grow nearly 4 times faster than toenails!",
              "Most dust particles in your house are made from dead skin!",
              "Present population of 5 billion plus people of the world is predicted to become 15 billion by 2080.",
              "Women blink nearly twice as much as men.",
              "Adolf Hitler was a vegetarian, and had only ONE testicle.",
              "Honey is the only food that does not spoil.",
              "Months that begin on a Sunday will always have a 'Friday the 13th.'",
              "Coca-Cola would be green if coloring weren’t added to it.",
              "On average a hedgehog's heart beats 300 times a minute.",
              "More people are killed each year from bees than from snakes.",
              "The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words.",
              "More people are allergic to cow's milk than any other food.",
              "Camels have three eyelids to protect themselves from blowing sand.",
              "The placement of a donkey's eyes in it’s' heads enables it to see all four feet at all times!",
              "The six official languages of the U.N. are: English, French, Arabic, Chinese, Russian and Spanish.",
              "Earth is the only planet not named after a god.",
              "It's against the law to burp, or sneeze in a church in Nebraska, USA.",
              "You're born with 300 bones, but by the time you become an adult, you only have 206.",
              "Some worms will eat themselves if they can't find any food!",
              "The world’s oldest piece of chewing gum is 9000 years old!",
              "The longest recorded flight of a chicken is 13 seconds",
              "Owls are the only birds that can see the color blue.",
              "A man named Charles Osborne had the hiccups for 69 years!",
              "A giraffe can clean its ears with its 21-inch tongue!",
              "The average person laughs 10 times a day!",
              "The Bible, the world's best-selling book, is also the world's most shoplifted book.",
              "Someone paid $14,000 for the bra worn by Marilyn Monroe in the film 'Some Like It Hot'.",
              "Your tongue is the only muscle in your body that is attached at only one end.",
              "More than 1,000 different languages are spoken on the continent of Africa.",
              "Buckingham Palace in England has over six hundred rooms.",
              "There was once an undersea post office in the Bahamas.",
              "Ninety percent of New York City cabbies are recently arrived immigrants.",
              "It's possible to lead a cow upstairs...but not downstairs.",
              "A snail can sleep for three years.",
              "No word in the English language rhymes with 'MONTH'.",
              "Average life span of a major league baseball: 7 pitches.",
              "Our eyes are always the same size from birth, but our nose and ears never stop growing.",
              "'Go.' is the shortest complete sentence in the English language.",
              "The 'pound' key on your keyboard (#) is called an octotroph.",
              "The only domestic animal not mentioned in the Bible is the cat.",
              "Table tennis balls have been known to travel off the paddle at speeds up to 160 km/hr.",
              "Pepsi originally contained pepsin, thus the name.",
              "The original story from 'Tales of 1001 Arabian Nights' begins, 'Aladdin was a little Chinese boy.'",
              "Nutmeg is extremely poisonous if injected intravenously.",
              "Honey is the only natural food that is made without destroying any kind of life.",
              "The volume of the earth's moon is the same as the volume of the Pacific Ocean.",
              "Cephalacaudal recapitulation is the reason our extremities develop faster than the rest of us.",
              "Chinese Crested dogs can get acne.",
              "Each year there is one ton of cement poured for each man woman and child in the world.",
              "The house fly hums in the middle octave key of F.",
              "The only capital letter in the Roman alphabet with exactly one end point is P.",
              "The giant red star Betelgeuse has a diameter larger than that of the Earth's orbit around the sun.",
              "Hummingbirds are the only animals that can fly backwards.",
              "A cat's jaw cannot move sideways.",
              "The human heart creates enough pressure when it pumps out to the body to squirt blood 30 feet.",
              "The flea can jump 350 times its body length. It's like a human jumping the length of a football field.",
              "Some lions mate over 50 times a day.",
              "The average person's left hand does 56% of the typing.",
              "The longest one-syllable word in the English language is 'screeched.'",
              "All of the clocks in the movie 'Pulp Fiction' are stuck on 4:20.",
              "'Dreamt' is the only English word that ends in the letters 'mt.'",
              "Maine is the only state (in USA) whose name is just one syllable.",
              "The giant squid has the largest eyes in the world.",
              "In England, the Speaker of the House is not allowed to speak.",
              "Mr. Rogers was an ordained minister.",
              "A rat can last longer without water than a camel.",
              "Your stomach has to produce a new layer of mucus every two weeks or it will digest itself.",
              "A 2' X 4' is really 1-1/2' by 3-1/2'.",
              "On average, 12 newborns will be given to the wrong parents daily.",
              "There are no words in the dictionary that rhyme with orange, purple, silver and month.",
              "If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.",
              "The first CD pressed in the US was Bruce Springsteen's 'Born in the USA.'",
              "Sherlock Holmes NEVER said, 'Elementary, my dear Watson.'",
              "California consumes more bottled water than any other product.",
              "California has issued 6 drivers licenses to people named 'Jesus Christ.'",
              "In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.",
              "Nevada is the driest state in the U.S.. Each year it averages 7.5 inches (19 cm) of rain.",
              "In Utah, it is illegal to swear in front of a dead person.",
              "Salt Lake City, Utah has a law against carrying an unwrapped ukulele on the street.",
              "Arizona was the last of the 48 adjoining continental states to enter the Union.",
              "It is illegal to hunt camels in the state of Arizona.",
              "Wyoming was the first state to give women the right to vote in 1869.",
              "Denver, Colorado lays claim to the invention of the cheeseburger.",
              "The first license plate on a car in the United States was issued in Denver, Colorado in 1908.",
              "The state of Maryland has no natural Lakes.",
              "Illinois has the highest number of personalized license plates than any other state.",
              "Residents of Houston, Texas lead the U.S. in eating out - approximately 4.6 times per week.",
              "Laredo, Texas is the U.S.'s farthest inland port.",
              "Rugby, North Dakota is the geographical center of North America.",
              "Butte County, South Dakota is the geographical center of the U.S.",
              "Louisiana's capital building is the tallest one of any U.S. state.",
              "Hawaii is the only coffee producing state.",
              "One in seven workers in Boston, Massachusetts walks to work.",
              "The 'Dull Men's Hall of Fame' is located in Carroll, Wisconsin.",
              "Gary, Indiana is the murder capital of the U.S. - probably the world.",
              "Alabama was the first state to recognize Christmas as an official holiday.",
              "The largest NFL stadium is the Pontiac Silverdome in Detroit, Michigan.",
              "Michigan was the first state to have roadside picnic tables.",
              "No matter where you stand in Michigan, you are never more than 85 miles from a Great Lake.",
              "The official beverage of Ohio is tomato juice.",
              "Georgia's state motto is 'Wisdom, Justice and Moderation.'",
              "The U.S. city with the highest rate of lightning strikes per capita is Clearwater, Florida.",
              "It's illegal to spit on the sidewalk in Norfolk, Virginia.",
              "The first streetlights in America were installed in Philadelphia around 1757.",
              "The highest point in Pennsylvania is lower than the lowest point in Colorado.",
              "If you were to take a taxicab from New York City to Los Angeles, it would cost you $8,325.",
              "The NY phone book had 22 Hitlers before WWII. The NY phone book had 0 Hitlers after WWII.",
              "In New York State, it is illegal to but any alcohol on Sundays before noon.",
              "There were 240 pedestrian fatalities in New York City in 1994.",
              "Columbia University is the second largest landowner in New York City, after the Catholic Church.",
              "Montpelier, Vermont is the only state capital without a McDonalds.",
              "Maine is the only state that has borders with only one other state.",
              "The first McDonald's restaurant in Canada was in Richmond, British Columbia.",
              "In 1984, a Canadian farmer began renting advertising space on his cows.",
              "There are more donut shops in Canada per capita than any other country.",
              "0.3% of all road accidents in Canada involve a Moose.",
              "In the great fire of London in 1666 half of London was burnt down but only 6 people were injured.",
              "In Quebec, there is an old law that states margarine must be a different color than butter.",
              "The largest taxi fleet in the world is found in Mexico City. The city boasts a fleet of over 60,000 taxis.",
              "More than 90% of the Nicaraguan people are Roman Catholic.",
              "Cuba is the only island in the Caribbean to have a railroad.",
              "Jamaica has the most churches per square mile than any other country in the world.",
              "The angel falls in Venezuela are nearly 20 times taller than Niagara Falls.",
              "Canada is the only country not to win a gold medal in the summer Olympic games while hosting.",
              "The Amazon is the world's largest river, 3,890 miles (6,259 km) long.",
              "The town of Calma, Chile in the Atacama Desert has never had rain.",
              "The people of France eat more cheese than any other country in the world.",
              "King Louis XIX ruled France for 15 minutes.",
              "The most common name in Italy is Mario Rossi.",
              "Greece's national anthem has 158 verses.",
              "In ancient Greece 'idiot' meant a private citizen or layman.",
              "Bulgarians are known to be the biggest yogurt eaters in the world.",
              "Czechs are the biggest consumers of beer per male in the world.",
              "A Czech man, Jan Honza Zampa, holds the record for drinking one liter of beer in 4.11 seconds.",
              "Netherlands is the only country with a national dog.",
              "When we think of Big Ben in London, we think of the clock. Actually, it's the bell.",
              "The Automated Teller Machine (ATM) was introduced in England in 1965.",
              "Buckingham Palace has 602 rooms.",
              "Icelanders consume more Coca-Cola per Capita than any other nation.",
              "Until 1997, there were more pigs than people in Denmark.",
              "There is a hotel in Sweden built entirely out of ice; it is rebuilt every year.",
              "Sweden has the least number of murders annually.",
              "Lithuania has the highest suicide rate in the world.",
              "The country code for Russia is '007'.",
              "Russians generally answer the phone by saying, 'I'm listening'.",
              "The U.S. bought Alaska for 2 cents an acre from Russia.",
              "1 in 5 of the world's doctors are Russian.",
              "Antarctica is the only continent that does not have land areas below sea level.",
              "The people of Israel consume more turkeys per capita than any other country.",
              "Nepal is the only country that has a non-rectangular flag. It is also asymmetrical.",
              "1,800 cigarettes are smoked per person each year in China.",
              "Respiratory Disease is China's leading cause of death.",
              "There are more than 40,000 characters in the Chinese script.",
              "More people speak English in China than the United States.",
              "The toothbrush was invented in China in 1498.",
              "Mongolia is the largest landlocked country.",
              "Vatican City is the smallest country in the world, with a population of 1000 and just 108.7 acres.",
              "In Japan, watermelons are squared. It's easier to stack them that way.",
              "98% of Japanese are cremated.",
              "The number 'four' is considered unlucky in Japan because it is pronounced the same as 'death'.",
              "The average Japanese household watches more than 10 hours of television a day.",
              "The Philippines has about 7,100 islands, of which only about 460 are more than 1 square mile in area.",
              "Yo-yos were used as weapons by warriors in the Philippines in the 16th century.",
              "Australian soldiers used the song 'We're Off to See the Wizard' as a marching song in WWII.",
              "The Australian $5 to $100 notes are made of plastic.",
              "The Nullarbor Plain of Australia covers 100,000 square miles (160,900 km) without a tree.",
              "Tasmania, Australia has the cleanest air in the inhabited world.",
              "Greenland is the largest island in the world.",
              "The first female guest host of 'Saturday Night Live' was Candace Bergen.",
              "In 1933, Mickey Mouse, an animated cartoon character, received 800,000 fan letters.",
              "The Simpsons is the longest running animated series on TV.",
              "The first toilet ever seen on television was on 'Leave It to Beaver.'",
              "In every episode of Seinfeld there is a Superman somewhere.",
              "The average human brain has about 100 billion nerve cells.",
              "Nerve impulses to and from the brain travel as fast as 170 miles (274 km) per hour.",
              "The thyroid cartilage is more commonly known as the adams apple.",
              "Your stomach needs to produce a new layer of mucus every two weeks or it would digest itself.",
              "The average life of a taste bud is 10 days.",
              "The average cough comes out of your mouth at 60 miles (96.5 km) per hour.",
              "Relative to size, the strongest muscle in the body is the tongue.",
              "When you sneeze, all your bodily functions stop even your heart.",
              "Babies are born without knee caps. They don't appear until the child reaches 2-6 years of age.",
              "Right handed people live, on average, nine years longer than left handed people do.",
              "Children grow faster in the springtime.",
              "It takes the stomach an hour to break down cows’ milk.",
              "Blondes have more hair than dark-haired people do.",
              "There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum).",
              "If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.",
              "The average human head weighs about 8 pounds.",
              "In the average lifetime, a person will walk the equivalent of 5 times around the equator.",
              "An average human scalp has 100,000 hairs.",
              "The average human blinks their eyes 6,205,000 times each year.",
              "Your skull is made up of 29 different bones.",
              "Ancient Egyptians shaved off their eyebrows to mourn the deaths of their cats.",
              "Hair is made from the same substance as fingernails.",
              "The surface of the human skin is 6.5 square feet (2m).",
              "15 million blood cells are destroyed in the human body every second.",
              "The pancreas produces Insulin.",
              "The most sensitive cluster of nerves is at the base of the spine.",
              "The human body is comprised of 80% water.",
              "The average human will shed 40 pounds of skin in a lifetime.",
              "Human thighbones are stronger than concrete.",
              "There are 45 miles of nerves in the skin of a human being.",
              "Canadian researchers have found that Einstein's brain was 15% wider than normal.",
              "While in Alcatraz, Al Capone was inmate #85.",
              "Astronaut Neil Armstrong first stepped on the moon with his left foot.",
              "Jim Morrison, of the 60's rock group The Doors, was the first rock star to be arrested on stage.",
              "Frank Lloyd Wright's son invented Lincoln Logs.",
              "Peter Falk, who played 'Columbo,' has a glass eye.",
              "Barbie's full name is 'Babara Millicent Roberts.'",
              "The mother of Michael Nesmith of 'The Monkees' invented whiteout.",
              "Isaac Asimov is the only author to have a book in every Dewey-decimal category.",
              "Shakespeare invented the word 'assassination' and 'bump.'",
              "Leonardo Da Vinci invented the scissors.",
              "Adolf Hitler's mother seriously considered having an abortion but was talked out of it by her doctor.",
              "Marilyn Monroe had six toes.",
              "The shortest British monarch was Charles I, who was 4 feet 9 inches.",
              "Tina Turner's real name is Annie Mae Bullock.",
              "Beethoven dipped his head in cold water before he composed.",
              "President John F Kennedy could read 4 newspapers in 20 minutes.",
              "Bob Dylan's real name is Robert Zimmerman.",
              "Sigmund Freud had a morbid fear of ferns.",
              "Anne Boleyn, Queen Elizabeth I's mother, had six fingers on one hand.",
              "Orville Wright was involved in the first aircraft accident. His passenger, a Frenchman, was killed.",
              "The sound of E.T. walking was made by someone squishing her hands in jelly.",
              "Cher's last name was 'Sarkissian.' She changed it because no one could pronounce it.",
              "Sugar was first added to chewing gum in 1869 by a dentist, William Semple.",
              "Paper was invented early in the second century by Chinese eunuch.",
              "Sir Isaac Newton was only 23 years old when he discovered the law of universal gravitation.",
              "Hannibal had only one eye after getting a disease while attacking Rome.",
              "A blue whales heart only beats nine times per minute.",
              "A cat uses its whiskers to determine if a space is too small to squeeze through.",
              "A chameleon's tongue is twice the length of its body.",
              "A crocodiles tongue is attached to the roof of its mouth.",
              "Rodent's teeth never stop growing.",
              "A shark can detect one part of blood in 100 million parts of water.",
              "The penguin is the only bird that can swim but can't fly.",
              "The cheetah is the only cat that can't retract its claws.",
              "A lion's roar can be heard from five miles away.",
              "Emus and kangaroos can't walk backwards.",
              "Cats have over 100 vocal sounds; dogs only have 10.",
              "A mole can dig a tunnel 300 feet (91 m) long in just one night.",
              "Insects outnumber humans 100,000,000 to one.",
              "Sharkskin has tiny tooth-like scales all over.",
              "Chameleons can move their eyes in two directions at the same time.",
              "Koalas never drink water. They get fluids from the eucalyptus leaves they eat.",
              "A cow gives nearly 200,000 glasses of milk in her lifetime.",
              "When sharks take a bite, their eyes roll back and their teeth jut out.",
              "Camels chew in a figure 8 pattern.",
              "Proportional to their size, cats have the largest eyes of all mammals.",
              "Sailfish can leap out of the water and into the air at a speed of 50 miles (81 km) per hour.",
              "The catfish has the most taste buds of all animals, having over 27,000 of them.",
              "A skunk's smell can be detected by a human a mile away.",
              "A lion in the wild usually makes no more than 20 kills a year.",
              "In space, astronauts cannot cry, because there is no gravity, so the tears can't flow.",
              "The state of Florida is bigger than England.",
              "One in every 4 Americans has appeared on television.",
              "The average American/Canadian will eat about 11.9 pounds of cereal per year!",
              "There are over 58 million dogs in the US",
              "Dogs and cats consume over $11 billion worth of pet food a year",
              "Baby robins eat 14 feet of earthworms every day",
              "In Raiders of the Lost Ark there is a wall carving of R2-D2 and C-3P0 behind the ark",
              "'I' is the most spoken word in the English language",
              "'You' is the second most spoken English word",
              "Spain leads the world in cork production",
              "There are 1,792 steps in the Eiffel Tower",
              "There is a city in Norway called 'Hell'",
              "The human brain uses the same amount of energy as a 10-watt light bulb",
              "The human feet perspire half a pint of fluid a day",
              "An Olympic gold medal must contain 92.5 percent silver",
              "There are 240 dots on an arcade Pac-Man game",
              "The San Francisco Cable cars are the only mobile National Monuments",
              "Lee Harvey Oswald's cadaver tag sold at an auction for $6,600 in 1992.",
              "A pound of houseflies contains more protein than a pound of beef",
              "The average American works 24,000 hours in their lifetime just to pay their taxes",
              "The U.S. military operates 234 golf courses",
              "40% of all people who come to a party in your home snoop in your medicine cabinet",
              "A duck's quack doesn't echo, and no one knows why.",
              "Non-dairy creamer is flammable.",
              "Pinocchio is Italian for 'pine head.'",
              "There are more than 10 million bricks in the Empire State Building.",
              "The sun is 330,330 times larger than the earth.",
            ]);
        }
        var n, s, l;
        return (
          (n = t),
          (s = [
            {
              key: "debug",
              value: function () {
                console.log(this.currentSpin, this.winSpin, this.maxNextWin);
              },
            },
            {
              key: "random",
              value: function (e) {
                return Math.floor(Math.random() * e);
              },
            },
            {
              key: "resetNextWin",
              value: function () {
                (this.currentSpin = 0),
                  (this.winSpin = this.random(this.maxNextWin)),
                  this.debug();
              },
            },
            {
              key: "spin",
              value: function () {
                var e = this;
                return (
                  !this.spinButton.disabled &&
                  (this.onSpinStart(),
                  Promise.all(
                    this.reels.map(function (t) {
                      return t.renderSymbols(e.nextSymbols[t.idx]), t.spin();
                    })
                  ).then(function () {
                    return e.onSpinEnd();
                  }))
                );
              },
            },
            {
              key: "onSpinStart",
              value: function () {
                (this.spinButton.disabled = !0),
                  new Audio("spin.mp3").play(),
                  this.knobAnimation(),
                  this.checkOverSpin(),
                  (this.currentSymbols = this.nextSymbols),
                  (this.isWinSpin = this.currentSpin === this.winSpin),
                  this.checkWin();
              },
            },
            {
              key: "onSpinEnd",
              value: function () {
                (this.spinButton.disabled = !1),
                  this.setWin(),
                  this.currentSpin++,
                  e("#slot-trigger").removeClass("slot-triggerDisabled");
              },
            },
            {
              key: "knobAnimation",
              value: function () {
                e(".arm").animate({ top: "45px", height: "2%" }),
                  e(".arm .knob").animate({ top: "-40px", height: "60px" }),
                  e(".arm-shadow").animate({ top: "40px" }, 380),
                  e(".ring1 .shadow, .ring2 .shadow").animate({
                    top: "50%",
                    opacity: 1,
                  }),
                  e("#slot-trigger").addClass("slot-triggerDisabled"),
                  e("img.slotSpinAnimation").show(),
                  setTimeout(function () {
                    e(".arm").animate({
                      top: "-25px",
                      height: "50%",
                      overflow: "visible",
                    }),
                      e(".arm .knob").animate({ top: "-40px", height: "60px" }),
                      e(".arm-shadow").animate({ top: "39px" }),
                      e(".ring1 .shadow, .ring2 .shadow").animate({
                        top: "auto",
                        opacity: 0,
                      });
                  }, 500);
              },
            },
            {
              key: "generateWinningTiles",
              value: function () {
                var e = o.a.random(),
                  t = [
                    [
                      [o.a.random(), e, o.a.random()],
                      [o.a.random(), e, o.a.random()],
                      [o.a.random(), e, o.a.random()],
                      [o.a.random(), e, o.a.random()],
                      [o.a.random(), e, o.a.random()],
                    ],
                  ];
                this.nextSymbols = t[Math.floor(Math.random() * t.length)];
              },
            },
            {
              key: "checkWin",
              value: function () {
                this.isWinSpin
                  ? this.generateWinningTiles()
                  : (this.nextSymbols = [
                      [o.a.random(), o.a.random(), o.a.random()],
                      [o.a.random(), o.a.random(), o.a.random()],
                      [o.a.random(), o.a.random(), o.a.random()],
                      [o.a.random(), o.a.random(), o.a.random()],
                      [o.a.random(), o.a.random(), o.a.random()],
                    ]);
              },
            },
            {
              key: "setWin",
              value: function () {
                var e = this.nextSymbols[0][1],
                  t = this.nextSymbols[1][1],
                  n = this.nextSymbols[2][1],
                  r = this.nextSymbols[3][1],
                  o = this.nextSymbols[4][1];
                if (e === t && e === n && e === r && e === o) {
                  for (var a = 0; a < 5; a++)
                    this.reels[
                      a
                    ].reelContainer.children[0].children[0].classList.add(
                      "blur"
                    ),
                      this.reels[
                        a
                      ].reelContainer.children[0].children[2].classList.add(
                        "blur"
                      );
                  this.resetNextWin(), this.displayWin();
                }
              },
            },
            {
              key: "checkOverSpin",
              value: function () {
                this.currentSpin > this.winSpin && (this.currentSpin = 0);
              },
            },
            {
              key: "displayWin",
              value: function () {
                (document.getElementById(
                  "modal-content"
                ).innerHTML = this.facts[
                  Math.floor(Math.random() * this.facts.length)
                ]),
                  new Audio("win.mp3").play(),
                  console.log("WIN");
              },
            },
            {
              key: "move",
              value: function (e) {
                var t = 0,
                  n = setInterval(function () {
                    t++,
                      (e.style.left = t + "px"),
                      100 === t && clearInterval(n);
                  }, 10);
              },
            },
          ]) && i(n.prototype, s),
          l && i(n, l),
          t
        );
      })();
    }.call(this, n(6)));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(0);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = (function () {
      function e(t, n, o) {
        var a = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.reelContainer = t),
          (this.idx = n),
          (this.symbolContainer = document.createElement("div")),
          this.symbolContainer.classList.add("icons"),
          this.reelContainer.appendChild(this.symbolContainer),
          (this.animation = this.symbolContainer.animate(
            [
              { transform: "none", filter: "blur(0)" },
              { filter: "blur(2px)", offset: 0.5 },
              {
                transform: "translateY(-".concat(
                  ((10 * Math.floor(this.factor)) /
                    (3 + 10 * Math.floor(this.factor))) *
                    100,
                  "%)"
                ),
                filter: "blur(0)",
              },
            ],
            { duration: 1e3 * this.factor, easing: "ease-in-out" }
          )),
          this.animation.cancel(),
          o.forEach(function (e) {
            return a.symbolContainer.appendChild(new r.a(e).img);
          });
      }
      var t, n, a;
      return (
        (t = e),
        (n = [
          {
            key: "renderSymbols",
            value: function (e) {
              for (
                var t = document.createDocumentFragment(), n = 3;
                n < 3 + 10 * Math.floor(this.factor);
                n++
              ) {
                var o = new r.a(
                  n >= 10 * Math.floor(this.factor) - 2
                    ? e[n - 10 * Math.floor(this.factor)]
                    : void 0
                );
                t.appendChild(o.img);
              }
              this.symbolContainer.appendChild(t);
            },
          },
          {
            key: "spin",
            value: function () {
              var e = this,
                t = new Promise(function (t) {
                  return (e.animation.onfinish = t);
                }),
                n = new Promise(function (t) {
                  return setTimeout(t, 1e3 * e.factor);
                });
              return (
                this.animation.play(),
                Promise.race([t, n]).then(function () {
                  "finished" !== e.animation.playState && e.animation.finish();
                  for (
                    var t = e.symbolContainer.children.length - 3, n = 0;
                    n < t;
                    n++
                  )
                    e.symbolContainer.firstChild.remove();
                })
              );
            },
          },
          {
            key: "factor",
            get: function () {
              return 1 + Math.pow(this.idx / 2, 2);
            },
          },
        ]) && o(t.prototype, n),
        a && o(t, a),
        e
      );
    })();
  },
  function (e, t, n) {
    n(5), (e.exports = n(20));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    new (n(2).a)(document.getElementById("slot"), { inverted: !1 });
    document.getElementsByClassName("close")[0].onclick = function () {
      r.style.display = "none";
    };
    var r = document.getElementById("uselessFacts");
    window.onclick = function (e) {
      e.target === r && (r.style.display = "none");
    };
  },
  function (e, t, n) {
    (function (t) {
      e.exports = t.jQuery = n(7);
    }.call(this, n(1)));
  },
  function (e, t, n) {
    (function (t) {
      e.exports = t.$ = n(8);
    }.call(this, n(1)));
  },
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-04-10T15:07Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var a = [],
        i = Object.getPrototypeOf,
        s = a.slice,
        l = a.flat
          ? function (e) {
              return a.flat.call(e);
            }
          : function (e) {
              return a.concat.apply([], e);
            },
        u = a.push,
        c = a.indexOf,
        h = {},
        d = h.toString,
        f = h.hasOwnProperty,
        p = f.toString,
        g = p.call(Object),
        m = {},
        y = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        b = function (e) {
          return null != e && e === e.window;
        },
        v = n.document,
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var r,
          o,
          a = (n = n || v).createElement("script");
        if (((a.text = e), t))
          for (r in w)
            (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              a.setAttribute(r, o);
        n.head.appendChild(a).parentNode.removeChild(a);
      }
      function k(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? h[d.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = k(e);
        return (
          !y(e) &&
          !b(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.5.0",
        constructor: T,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return T.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            T.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            T.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            T.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: a.sort,
        splice: a.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var e,
            t,
            n,
            r,
            o,
            a,
            i = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof i && ((u = i), (i = arguments[s] || {}), s++),
              "object" == typeof i || y(i) || (i = {}),
              s === l && ((i = this), s--);
            s < l;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    i !== r &&
                    (u && r && (T.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = i[t]),
                        (a =
                          o && !Array.isArray(n)
                            ? []
                            : o || T.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (i[t] = T.extend(u, a, r)))
                      : void 0 !== r && (i[t] = r));
          return i;
        }),
        T.extend({
          expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = i(e)) ||
                ("function" ==
                  typeof (n = f.call(t, "constructor") && t.constructor) &&
                  p.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            x(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (C(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, a = e.length, i = !n; o < a; o++)
              !t(e[o], o) !== i && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              a = 0,
              i = [];
            if (C(e))
              for (r = e.length; a < r; a++)
                null != (o = t(e[a], a, n)) && i.push(o);
            else for (a in e) null != (o = t(e[a], a, n)) && i.push(o);
            return l(i);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = a[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            h["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            y,
            b,
            v,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            k = 0,
            T = 0,
            C = le(),
            S = le(),
            A = le(),
            E = le(),
            N = function (e, t) {
              return e === t && (h = !0), 0;
            },
            j = {}.hasOwnProperty,
            D = [],
            I = D.pop,
            M = D.push,
            L = D.push,
            q = D.slice,
            O = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            B =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              P +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              P +
              "*(" +
              B +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              B +
              "))|)" +
              P +
              "*\\]",
            W =
              ":(" +
              B +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            F = new RegExp(P + "+", "g"),
            z = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            _ = new RegExp("^" + P + "*," + P + "*"),
            U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            $ = new RegExp(P + "|>"),
            V = new RegExp(W),
            J = new RegExp("^" + B + "$"),
            Y = {
              ID: new RegExp("^#(" + B + ")"),
              CLASS: new RegExp("^\\.(" + B + ")"),
              TAG: new RegExp("^(" + B + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ae = function () {
              d();
            },
            ie = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            L.apply((D = q.call(x.childNodes)), x.childNodes),
              D[x.childNodes.length].nodeType;
          } catch (e) {
            L = {
              apply: D.length
                ? function (e, t) {
                    M.apply(e, q.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, o) {
            var a,
              s,
              u,
              c,
              h,
              p,
              y,
              b = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
            )
              return r;
            if (!o && (d(t), (t = t || f), g)) {
              if (11 !== x && (h = Z.exec(e)))
                if ((a = h[1])) {
                  if (9 === x) {
                    if (!(u = t.getElementById(a))) return r;
                    if (u.id === a) return r.push(u), r;
                  } else if (
                    b &&
                    (u = b.getElementById(a)) &&
                    v(t, u) &&
                    u.id === a
                  )
                    return r.push(u), r;
                } else {
                  if (h[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (a = h[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return L.apply(r, t.getElementsByClassName(a)), r;
                }
              if (
                n.qsa &&
                !E[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== x || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((y = e), (b = t), 1 === x && ($.test(e) || U.test(e)))) {
                  for (
                    ((b = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, oe))
                        : t.setAttribute("id", (c = w))),
                      s = (p = i(e)).length;
                    s--;

                  )
                    p[s] = (c ? "#" + c : ":scope") + " " + ve(p[s]);
                  y = p.join(",");
                }
                try {
                  return L.apply(r, b.querySelectorAll(y)), r;
                } catch (t) {
                  E(e, !0);
                } finally {
                  c === w && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(z, "$1"), t, r, o);
          }
          function le() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function ue(e) {
            return (e[w] = !0), e;
          }
          function ce(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function he(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function pe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return ue(function (t) {
              return (
                (t = +t),
                ue(function (n, r) {
                  for (var o, a = e([], n.length, t), i = a.length; i--; )
                    n[(o = a[i])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (a = se.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !G.test(t || (n && n.nodeName) || "HTML");
          }),
          (d = se.setDocument = function (e) {
            var t,
              o,
              i = e ? e.ownerDocument || e : x;
            return i != f && 9 === i.nodeType && i.documentElement
              ? ((p = (f = i).documentElement),
                (g = !a(f)),
                x != f &&
                  (o = f.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", ae, !1)
                    : o.attachEvent && o.attachEvent("onunload", ae)),
                (n.scope = ce(function (e) {
                  return (
                    p.appendChild(e).appendChild(f.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return (
                    e.appendChild(f.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (p.appendChild(e).id = w),
                    !f.getElementsByName || !f.getElementsByName(w).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          o,
                          a = t.getElementById(e);
                        if (a) {
                          if ((n = a.getAttributeNode("id")) && n.value === e)
                            return [a];
                          for (
                            o = t.getElementsByName(e), r = 0;
                            (a = o[r++]);

                          )
                            if ((n = a.getAttributeNode("id")) && n.value === e)
                              return [a];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        o = 0,
                        a = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = a[o++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return a;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (y = []),
                (m = []),
                (n.qsa = Q.test(f.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (p.appendChild(e).innerHTML =
                      "<a id='" +
                      w +
                      "'></a><select id='" +
                      w +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + P + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + P + "*(?:value|" + H + ")"),
                      e.querySelectorAll("[id~=" + w + "-]").length ||
                        m.push("~="),
                      (t = f.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      e.querySelectorAll("a#" + w + "+*").length ||
                        m.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      m.push("[\\r\\n\\f]");
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        m.push("name" + P + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (p.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = Q.test(
                  (b =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = b.call(e, "*")),
                      b.call(e, "[s!='']:x"),
                      y.push("!=", W);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (y = y.length && new RegExp(y.join("|"))),
                (t = Q.test(p.compareDocumentPosition)),
                (v =
                  t || Q.test(p.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (N = t
                  ? function (e, t) {
                      if (e === t) return (h = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == f || (e.ownerDocument == x && v(x, e))
                            ? -1
                            : t == f || (t.ownerDocument == x && v(x, t))
                            ? 1
                            : c
                            ? O(c, e) - O(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (h = !0), 0;
                      var n,
                        r = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        i = [e],
                        s = [t];
                      if (!o || !a)
                        return e == f
                          ? -1
                          : t == f
                          ? 1
                          : o
                          ? -1
                          : a
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0;
                      if (o === a) return de(e, t);
                      for (n = e; (n = n.parentNode); ) i.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; i[r] === s[r]; ) r++;
                      return r
                        ? de(i[r], s[r])
                        : i[r] == x
                        ? -1
                        : s[r] == x
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                g &&
                !E[t + " "] &&
                (!y || !y.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var r = b.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                E(t, !0);
              }
            return se(t, f, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != f && d(e), v(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != f && d(e);
            var o = r.attrHandle[t.toLowerCase()],
              a =
                o && j.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !g)
                  : void 0;
            return void 0 !== a
              ? a
              : n.attributes || !g
              ? e.getAttribute(t)
              : (a = e.getAttributeNode(t)) && a.specified
              ? a.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, oe);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              o = 0,
              a = 0;
            if (
              ((h = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(N),
              h)
            ) {
              for (; (t = e[a++]); ) t === e[a] && (o = r.push(a));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (c = null), e;
          }),
          (o = se.getText = function (e) {
            var t,
              n = "",
              r = 0,
              a = e.nodeType;
            if (a) {
              if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === a || 4 === a) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += o(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return Y.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        V.test(n) &&
                        (t = i(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = C[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                    C(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var o = se.attr(r, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                          ? o !== n
                          : "^=" === t
                          ? n && 0 === o.indexOf(n)
                          : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                          ? n && o.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, o) {
                var a = "nth" !== e.slice(0, 3),
                  i = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        h,
                        d,
                        f,
                        p,
                        g = a !== i ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        b = !l && !s,
                        v = !1;
                      if (m) {
                        if (a) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === y
                                  : 1 === d.nodeType
                              )
                                return !1;
                            p = g = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [i ? m.firstChild : m.lastChild]), i && b)) {
                          for (
                            v =
                              (f =
                                (u =
                                  (c =
                                    (h = (d = m)[w] || (d[w] = {}))[
                                      d.uniqueID
                                    ] || (h[d.uniqueID] = {}))[e] || [])[0] ===
                                  k && u[1]) && u[2],
                              d = f && m.childNodes[f];
                            (d = (++f && d && d[g]) || (v = f = 0) || p.pop());

                          )
                            if (1 === d.nodeType && ++v && d === t) {
                              c[e] = [k, f, v];
                              break;
                            }
                        } else if (
                          (b &&
                            (v = f =
                              (u =
                                (c =
                                  (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] ||
                                  (h[d.uniqueID] = {}))[e] || [])[0] === k &&
                              u[1]),
                          !1 === v)
                        )
                          for (
                            ;
                            (d =
                              (++f && d && d[g]) || (v = f = 0) || p.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== y
                              : 1 !== d.nodeType) ||
                              !++v ||
                              (b &&
                                ((c =
                                  (h = d[w] || (d[w] = {}))[d.uniqueID] ||
                                  (h[d.uniqueID] = {}))[e] = [k, v]),
                              d !== t));

                          );
                        return (v -= o) === r || (v % r == 0 && v / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return o[w]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ue(function (e, n) {
                          for (var r, a = o(e, t), i = a.length; i--; )
                            e[(r = O(e, a[i]))] = !(n[r] = a[i]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: ue(function (e) {
                var t = [],
                  n = [],
                  r = s(e.replace(z, "$1"));
                return r[w]
                  ? ue(function (e, t, n, o) {
                      for (var a, i = r(e, null, o, []), s = e.length; s--; )
                        (a = i[s]) && (e[s] = !(t[s] = a));
                    })
                  : function (e, o, a) {
                      return (
                        (t[0] = e), r(t, null, a, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ue(function (e) {
                return function (t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: ue(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ue(function (e) {
                return (
                  J.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === p;
              },
              focus: function (e) {
                return (
                  e === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return K.test(e.nodeName);
              },
              input: function (e) {
                return X.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: me(function () {
                return [0];
              }),
              last: me(function (e, t) {
                return [t - 1];
              }),
              eq: me(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: me(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: me(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
          function be() {}
          function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function we(e, t, n) {
            var r = t.dir,
              o = t.next,
              a = o || r,
              i = n && "parentNode" === a,
              s = T++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || i) return e(t, n, o);
                  return !1;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    h,
                    d = [k, s];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || i) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || i)
                        if (
                          ((c =
                            (h = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (h[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((u = c[a]) && u[0] === k && u[1] === s)
                            return (d[2] = u[2]);
                          if (((c[a] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function ke(e, t, n, r, o) {
            for (var a, i = [], s = 0, l = e.length, u = null != t; s < l; s++)
              (a = e[s]) && ((n && !n(a, r, o)) || (i.push(a), u && t.push(s)));
            return i;
          }
          function Te(e, t, n, r, o, a) {
            return (
              r && !r[w] && (r = Te(r)),
              o && !o[w] && (o = Te(o, a)),
              ue(function (a, i, s, l) {
                var u,
                  c,
                  h,
                  d = [],
                  f = [],
                  p = i.length,
                  g =
                    a ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  m = !e || (!a && t) ? g : ke(g, d, e, s, l),
                  y = n ? (o || (a ? e : p || r) ? [] : i) : m;
                if ((n && n(m, y, s, l), r))
                  for (u = ke(y, f), r(u, [], s, l), c = u.length; c--; )
                    (h = u[c]) && (y[f[c]] = !(m[f[c]] = h));
                if (a) {
                  if (o || e) {
                    if (o) {
                      for (u = [], c = y.length; c--; )
                        (h = y[c]) && u.push((m[c] = h));
                      o(null, (y = []), u, l);
                    }
                    for (c = y.length; c--; )
                      (h = y[c]) &&
                        (u = o ? O(a, h) : d[c]) > -1 &&
                        (a[u] = !(i[u] = h));
                  }
                } else (y = ke(y === i ? y.splice(p, y.length) : y)), o ? o(null, i, y, l) : L.apply(i, y);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                o,
                a = e.length,
                i = r.relative[e[0].type],
                s = i || r.relative[" "],
                l = i ? 1 : 0,
                c = we(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                h = we(
                  function (e) {
                    return O(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var o =
                      (!i && (r || n !== u)) ||
                      ((t = n).nodeType ? c(e, n, r) : h(e, n, r));
                    return (t = null), o;
                  },
                ];
              l < a;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [we(xe(d), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                  for (o = ++l; o < a && !r.relative[e[o].type]; o++);
                  return Te(
                    l > 1 && xe(d),
                    l > 1 &&
                      ve(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(z, "$1"),
                    n,
                    l < o && Ce(e.slice(l, o)),
                    o < a && Ce((e = e.slice(o))),
                    o < a && ve(e)
                  );
                }
                d.push(n);
              }
            return xe(d);
          }
          return (
            (be.prototype = r.filters = r.pseudos),
            (r.setFilters = new be()),
            (i = se.tokenize = function (e, t) {
              var n,
                o,
                a,
                i,
                s,
                l,
                u,
                c = S[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (s = e, l = [], u = r.preFilter; s; ) {
                for (i in ((n && !(o = _.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), l.push((a = []))),
                (n = !1),
                (o = U.exec(s)) &&
                  ((n = o.shift()),
                  a.push({ value: n, type: o[0].replace(z, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(o = Y[i].exec(s)) ||
                    (u[i] && !(o = u[i](o))) ||
                    ((n = o.shift()),
                    a.push({ value: n, type: i, matches: o }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
            }),
            (s = se.compile = function (e, t) {
              var n,
                o = [],
                a = [],
                s = A[e + " "];
              if (!s) {
                for (t || (t = i(e)), n = t.length; n--; )
                  (s = Ce(t[n]))[w] ? o.push(s) : a.push(s);
                (s = A(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      a = function (a, i, s, l, c) {
                        var h,
                          p,
                          m,
                          y = 0,
                          b = "0",
                          v = a && [],
                          w = [],
                          x = u,
                          T = a || (o && r.find.TAG("*", c)),
                          C = (k += null == x ? 1 : Math.random() || 0.1),
                          S = T.length;
                        for (
                          c && (u = i == f || i || c);
                          b !== S && null != (h = T[b]);
                          b++
                        ) {
                          if (o && h) {
                            for (
                              p = 0,
                                i || h.ownerDocument == f || (d(h), (s = !g));
                              (m = e[p++]);

                            )
                              if (m(h, i || f, s)) {
                                l.push(h);
                                break;
                              }
                            c && (k = C);
                          }
                          n && ((h = !m && h) && y--, a && v.push(h));
                        }
                        if (((y += b), n && b !== y)) {
                          for (p = 0; (m = t[p++]); ) m(v, w, i, s);
                          if (a) {
                            if (y > 0)
                              for (; b--; ) v[b] || w[b] || (w[b] = I.call(l));
                            w = ke(w);
                          }
                          L.apply(l, w),
                            c &&
                              !a &&
                              w.length > 0 &&
                              y + t.length > 1 &&
                              se.uniqueSort(l);
                        }
                        return c && ((k = C), (u = x)), v;
                      };
                    return n ? ue(a) : a;
                  })(a, o)
                )).selector = e;
              }
              return s;
            }),
            (l = se.select = function (e, t, n, o) {
              var a,
                l,
                u,
                c,
                h,
                d = "function" == typeof e && e,
                f = !o && i((e = d.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if (
                  (l = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (u = l[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  a = Y.needsContext.test(e) ? 0 : l.length;
                  a-- && ((u = l[a]), !r.relative[(c = u.type)]);

                )
                  if (
                    (h = r.find[c]) &&
                    (o = h(
                      u.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && ye(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(a, 1), !(e = o.length && ve(l))))
                      return L.apply(n, o), n;
                    break;
                  }
              }
              return (
                (d || s(e, f))(
                  o,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && ye(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = w.split("").sort(N).join("") === w),
            (n.detectDuplicates = !!h),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              he("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              he("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              he(H, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var A = function (e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        E = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        N = T.expr.match.needsContext;
      function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(e, t, n) {
        return y(t)
          ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(I(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(I(this, e || [], !0));
          },
          is: function (e) {
            return !!I(
              this,
              "string" == typeof e && N.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var M,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || M), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : L.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : v,
                  !0
                )
              ),
              D.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (o = v.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (M = T(v));
      var q = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
      function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            o = this.length,
            a = [],
            i = "string" != typeof e && T(e);
          if (!N.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (i
                    ? i.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  a.push(n);
                  break;
                }
          return this.pushStack(a.length > 1 ? T.uniqueSort(a) : a);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(T(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return A(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return A(e, "parentNode", n);
            },
            next: function (e) {
              return H(e, "nextSibling");
            },
            prev: function (e) {
              return H(e, "previousSibling");
            },
            nextAll: function (e) {
              return A(e, "nextSibling");
            },
            prevAll: function (e) {
              return A(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return A(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return A(e, "previousSibling", n);
            },
            siblings: function (e) {
              return E((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return E(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && i(e.contentDocument)
                ? e.contentDocument
                : (j(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, r) {
              var o = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = T.filter(r, o)),
                this.length > 1 &&
                  (O[e] || T.uniqueSort(o), q.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var P = /[^\x20\t\r\n\f]+/g;
      function B(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function W(e, t, n, r) {
        var o;
        try {
          e && y((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && y((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(P) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          o,
          a = [],
          i = [],
          s = -1,
          l = function () {
            for (o = o || e.once, r = t = !0; i.length; s = -1)
              for (n = i.shift(); ++s < a.length; )
                !1 === a[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = a.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                a &&
                  (n && !t && ((s = a.length - 1), i.push(n)),
                  (function t(n) {
                    T.each(n, function (n, r) {
                      y(r)
                        ? (e.unique && u.has(r)) || a.push(r)
                        : r && r.length && "string" !== k(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, a, n)) > -1; )
                    a.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, a) > -1 : a.length > 0;
            },
            empty: function () {
              return a && (a = []), this;
            },
            disable: function () {
              return (o = i = []), (a = n = ""), this;
            },
            disabled: function () {
              return !a;
            },
            lock: function () {
              return (o = i = []), n || t || (a = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  i.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              o = {
                state: function () {
                  return r;
                },
                always: function () {
                  return a.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, r) {
                      var o = y(e[r[4]]) && e[r[4]];
                      a[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, o) {
                  var a = 0;
                  function i(e, t, r, o) {
                    return function () {
                      var s = this,
                        l = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < a)) {
                            if ((n = r.apply(s, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              y(u)
                                ? o
                                  ? u.call(n, i(a, t, B, o), i(a, t, R, o))
                                  : (a++,
                                    u.call(
                                      n,
                                      i(a, t, B, o),
                                      i(a, t, R, o),
                                      i(a, t, B, t.notifyWith)
                                    ))
                                : (r !== B && ((s = void 0), (l = [n])),
                                  (o || t.resolveWith)(s, l));
                          }
                        },
                        c = o
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= a &&
                                    (r !== R && ((s = void 0), (l = [n])),
                                    t.rejectWith(s, l));
                              }
                            };
                      e
                        ? c()
                        : (T.Deferred.getStackHook &&
                            (c.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(i(0, n, y(o) ? o : B, n.notifyWith)),
                      t[1][3].add(i(0, n, y(e) ? e : B)),
                      t[2][3].add(i(0, n, y(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, o) : o;
                },
              },
              a = {};
            return (
              T.each(t, function (e, n) {
                var i = n[2],
                  s = n[5];
                (o[n[1]] = i.add),
                  s &&
                    i.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  i.add(n[3].fire),
                  (a[n[0]] = function () {
                    return (
                      a[n[0] + "With"](this === a ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (a[n[0] + "With"] = i.fireWith);
              }),
              o.promise(a),
              e && e.call(a, a),
              a
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = s.call(arguments),
              a = T.Deferred(),
              i = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || a.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (W(e, a.done(i(n)).resolve, a.reject, !t),
              "pending" === a.state() || y(o[n] && o[n].then))
            )
              return a.then();
            for (; n--; ) W(o[n], i(n), a.reject);
            return a.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          F.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var z = T.Deferred();
      function _() {
        v.removeEventListener("DOMContentLoaded", _),
          n.removeEventListener("load", _),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          z.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || z.resolveWith(v, [T]));
          },
        }),
        (T.ready.then = z.then),
        "complete" === v.readyState ||
        ("loading" !== v.readyState && !v.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (v.addEventListener("DOMContentLoaded", _),
            n.addEventListener("load", _));
      var U = function (e, t, n, r, o, a, i) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ("object" === k(n))
            for (s in ((o = !0), n)) U(e, t, s, n[s], !0, a, i);
          else if (
            void 0 !== r &&
            ((o = !0),
            y(r) || (i = !0),
            u &&
              (i
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(T(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, i ? r : r.call(e[s], s, t(e[s], n)));
          return o ? e : u ? t.call(e) : l ? t(e[0], n) : a;
        },
        $ = /^-ms-/,
        V = /-([a-z])/g;
      function J(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace($, "ms-").replace(V, J);
      }
      var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = T.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = Object.create(null)),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else for (r in t) o[Y(r)] = t[r];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in r
                  ? [t]
                  : t.match(P) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var K = new X(),
        Q = new X(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Q.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return Q.hasData(e) || K.hasData(e);
        },
        data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        removeData: function (e, t) {
          Q.remove(e, t);
        },
        _data: function (e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function (e, t) {
          K.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              a = this[0],
              i = a && a.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = Q.get(a)), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))
              ) {
                for (n = i.length; n--; )
                  i[n] &&
                    0 === (r = i[n].name).indexOf("data-") &&
                    ((r = Y(r.slice(5))), te(a, r, o[r]));
                K.set(a, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Q.set(this, e);
                })
              : U(
                  this,
                  function (t) {
                    var n;
                    if (a && void 0 === t)
                      return void 0 !== (n = Q.get(a, e)) ||
                        void 0 !== (n = te(a, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Q.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Q.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = K.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = K.access(e, t, T.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              r = n.length,
              o = n.shift(),
              a = T._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete a.stop,
                o.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  a
                )),
              !r && a && a.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  K.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = T.Deferred(),
              a = this,
              i = this.length,
              s = function () {
                --r || o.resolveWith(a, [a]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              i--;

            )
              (n = K.get(a[i], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = v.documentElement,
        ie = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      ae.getRootNode &&
        (ie = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ie(e) && "none" === T.css(e, "display"))
        );
      };
      function ue(e, t, n, r) {
        var o,
          a,
          i = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          l = s(),
          u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== u && +l)) &&
            re.exec(T.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; i--; )
            T.style(e, t, c + u),
              (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (i = 0),
              (c /= a);
          (c *= 2), T.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = o))),
          o
        );
      }
      var ce = {};
      function he(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = ce[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
          (o = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ce[r] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, r, o = [], a = 0, i = e.length; a < i; a++)
          (r = e[a]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((o[a] = K.get(r, "display") || null),
                  o[a] || (r.style.display = "")),
                "" === r.style.display && le(r) && (o[a] = he(r)))
              : "none" !== n && ((o[a] = "none"), K.set(r, "display", n)));
        for (a = 0; a < i; a++) null != o[a] && (e[a].style.display = o[a]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var fe,
        pe,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ye = /^$|^module$|\/(?:java|ecma)script/i;
      (fe = v.createDocumentFragment().appendChild(v.createElement("div"))),
        (pe = v.createElement("input")).setAttribute("type", "radio"),
        pe.setAttribute("checked", "checked"),
        pe.setAttribute("name", "t"),
        fe.appendChild(pe),
        (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
        (fe.innerHTML = "<option></option>"),
        (m.option = !!fe.lastChild);
      var be = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function ve(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && j(e, t)) ? T.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
        (be.th = be.td),
        m.option ||
          (be.optgroup = be.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var xe = /<|&#?\w+;/;
      function ke(e, t, n, r, o) {
        for (
          var a,
            i,
            s,
            l,
            u,
            c,
            h = t.createDocumentFragment(),
            d = [],
            f = 0,
            p = e.length;
          f < p;
          f++
        )
          if ((a = e[f]) || 0 === a)
            if ("object" === k(a)) T.merge(d, a.nodeType ? [a] : a);
            else if (xe.test(a)) {
              for (
                i = i || h.appendChild(t.createElement("div")),
                  s = (me.exec(a) || ["", ""])[1].toLowerCase(),
                  l = be[s] || be._default,
                  i.innerHTML = l[1] + T.htmlPrefilter(a) + l[2],
                  c = l[0];
                c--;

              )
                i = i.lastChild;
              T.merge(d, i.childNodes), ((i = h.firstChild).textContent = "");
            } else d.push(t.createTextNode(a));
        for (h.textContent = "", f = 0; (a = d[f++]); )
          if (r && T.inArray(a, r) > -1) o && o.push(a);
          else if (
            ((u = ie(a)), (i = ve(h.appendChild(a), "script")), u && we(i), n)
          )
            for (c = 0; (a = i[c++]); ) ye.test(a.type || "") && n.push(a);
        return h;
      }
      var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function Ee() {
        return !1;
      }
      function Ne(e, t) {
        return (
          (e ===
            (function () {
              try {
                return v.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function je(e, t, n, r, o, a) {
        var i, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            je(e, s, n, r, t[s], a);
          return e;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = r), (r = void 0))
                : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = Ee;
        else if (!o) return e;
        return (
          1 === a &&
            ((i = o),
            ((o = function (e) {
              return T().off(e), i.apply(this, arguments);
            }).guid = i.guid || (i.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, o, r, n);
          })
        );
      }
      function De(e, t, n) {
        n
          ? (K.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  a = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (a.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((a = s.call(arguments)),
                    K.set(this, t, a),
                    (r = n(this, t)),
                    this[t](),
                    a !== (o = K.get(this, t)) || r
                      ? K.set(this, t, !1)
                      : (o = {}),
                    a !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  a.length &&
                    (K.set(this, t, {
                      value: T.event.trigger(
                        T.extend(a[0], T.Event.prototype),
                        a.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === K.get(e, t) && T.event.add(e, t, Ae);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var a,
            i,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m = K.get(e);
          if (G(e))
            for (
              n.handler && ((n = (a = n).handler), (o = a.selector)),
                o && T.find.matchesSelector(ae, o),
                n.guid || (n.guid = T.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (i = m.handle) ||
                  (i = m.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || "").match(P) || [""]).length;
              u--;

            )
              (f = g = (s = Se.exec(t[u]) || [])[1]),
                (p = (s[2] || "").split(".").sort()),
                f &&
                  ((h = T.event.special[f] || {}),
                  (f = (o ? h.delegateType : h.bindType) || f),
                  (h = T.event.special[f] || {}),
                  (c = T.extend(
                    {
                      type: f,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: p.join("."),
                    },
                    a
                  )),
                  (d = l[f]) ||
                    (((d = l[f] = []).delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(e, r, p, i)) ||
                      (e.addEventListener && e.addEventListener(f, i))),
                  h.add &&
                    (h.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[f] = !0));
        },
        remove: function (e, t, n, r, o) {
          var a,
            i,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m = K.hasData(e) && K.get(e);
          if (m && (l = m.events)) {
            for (u = (t = (t || "").match(P) || [""]).length; u--; )
              if (
                ((f = g = (s = Se.exec(t[u]) || [])[1]),
                (p = (s[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  h = T.event.special[f] || {},
                    d = l[(f = (r ? h.delegateType : h.bindType) || f)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    i = a = d.length;
                  a--;

                )
                  (c = d[a]),
                    (!o && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (d.splice(a, 1),
                      c.selector && d.delegateCount--,
                      h.remove && h.remove.call(e, c));
                i &&
                  !d.length &&
                  ((h.teardown && !1 !== h.teardown.call(e, p, m.handle)) ||
                    T.removeEvent(e, f, m.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(e, f + t[u], n, r, !0);
            T.isEmptyObject(l) && K.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
            s = new Array(arguments.length),
            l = T.event.fix(e),
            u = (K.get(this, "events") || Object.create(null))[l.type] || [],
            c = T.event.special[l.type] || {};
          for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, l))
          ) {
            for (
              i = T.event.handlers.call(this, l, u), t = 0;
              (o = i[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (a = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== a.namespace &&
                  !l.rnamespace.test(a.namespace)) ||
                  ((l.handleObj = a),
                  (l.data = a.data),
                  void 0 !==
                    (r = (
                      (T.event.special[a.origType] || {}).handle || a.handler
                    ).apply(o.elem, s)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            a,
            i,
            s = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (a = [], i = {}, n = 0; n < l; n++)
                  void 0 === i[(o = (r = t[n]).selector + " ")] &&
                    (i[o] = r.needsContext
                      ? T(o, this).index(u) > -1
                      : T.find(o, this, null, [u]).length),
                    i[o] && a.push(r);
                a.length && s.push({ elem: u, handlers: a });
              }
          return (
            (u = this),
            l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  De(t, "click", Ae),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && j(t, "input") && De(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  K.get(t, "click")) ||
                j(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : Ee),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Ee,
          isPropagationStopped: Ee,
          isImmediatePropagationStopped: Ee,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ce.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return De(this, e, Ne), !1;
            },
            trigger: function () {
              return De(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  a = e.handleObj;
                return (
                  (o && (o === r || T.contains(r, o))) ||
                    ((e.type = a.origType),
                    (n = a.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, r) {
            return je(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return je(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ee),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ie = /<script|<style|<link/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function qe(e, t) {
        return (
          (j(e, "table") &&
            j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Oe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function He(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Pe(e, t) {
        var n, r, o, a, i, s;
        if (1 === t.nodeType) {
          if (K.hasData(e) && (s = K.get(e).events))
            for (o in (K.remove(t, "handle events"), s))
              for (n = 0, r = s[o].length; n < r; n++)
                T.event.add(t, o, s[o][n]);
          Q.hasData(e) &&
            ((a = Q.access(e)), (i = T.extend({}, a)), Q.set(t, i));
        }
      }
      function Be(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Re(e, t, n, r) {
        t = l(t);
        var o,
          a,
          i,
          s,
          u,
          c,
          h = 0,
          d = e.length,
          f = d - 1,
          p = t[0],
          g = y(p);
        if (g || (d > 1 && "string" == typeof p && !m.checkClone && Me.test(p)))
          return e.each(function (o) {
            var a = e.eq(o);
            g && (t[0] = p.call(this, o, a.html())), Re(a, t, n, r);
          });
        if (
          d &&
          ((a = (o = ke(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === o.childNodes.length && (o = a),
          a || r)
        ) {
          for (s = (i = T.map(ve(o, "script"), Oe)).length; h < d; h++)
            (u = o),
              h !== f &&
                ((u = T.clone(u, !0, !0)), s && T.merge(i, ve(u, "script"))),
              n.call(e[h], u, h);
          if (s)
            for (
              c = i[i.length - 1].ownerDocument, T.map(i, He), h = 0;
              h < s;
              h++
            )
              (u = i[h]),
                ye.test(u.type || "") &&
                  !K.access(u, "globalEval") &&
                  T.contains(c, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !u.noModule &&
                      T._evalUrl(
                        u.src,
                        { nonce: u.nonce || u.getAttribute("nonce") },
                        c
                      )
                    : x(u.textContent.replace(Le, ""), u, c));
        }
        return e;
      }
      function We(e, t, n) {
        for (var r, o = t ? T.filter(t, e) : e, a = 0; null != (r = o[a]); a++)
          n || 1 !== r.nodeType || T.cleanData(ve(r)),
            r.parentNode &&
              (n && ie(r) && we(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            o,
            a,
            i,
            s = e.cloneNode(!0),
            l = ie(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (i = ve(s), r = 0, o = (a = ve(e)).length; r < o; r++)
              Be(a[r], i[r]);
          if (t)
            if (n)
              for (
                a = a || ve(e), i = i || ve(s), r = 0, o = a.length;
                r < o;
                r++
              )
                Pe(a[r], i[r]);
            else Pe(e, s);
          return (
            (i = ve(s, "script")).length > 0 && we(i, !l && ve(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, o = T.event.special, a = 0;
            void 0 !== (n = e[a]);
            a++
          )
            if (G(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (r in t.events)
                    o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[K.expando] = void 0;
              }
              n[Q.expando] && (n[Q.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return We(this, e, !0);
          },
          remove: function (e) {
            return We(this, e);
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Re(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                qe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Re(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = qe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Re(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(ve(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Ie.test(e) &&
                  !be[(me.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(ve(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Re(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(ve(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, r = [], o = T(e), a = o.length - 1, i = 0;
                i <= a;
                i++
              )
                (n = i === a ? this : this.clone(!0)),
                  T(o[i])[t](n),
                  u.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        ze = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        _e = function (e, t, n) {
          var r,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = a[o];
          return r;
        },
        Ue = new RegExp(oe.join("|"), "i");
      function $e(e, t, n) {
        var r,
          o,
          a,
          i,
          s = e.style;
        return (
          (n = n || ze(e)) &&
            ("" !== (i = n.getPropertyValue(t) || n[t]) ||
              ie(e) ||
              (i = T.style(e, t)),
            !m.pixelBoxStyles() &&
              Fe.test(i) &&
              Ue.test(t) &&
              ((r = s.width),
              (o = s.minWidth),
              (a = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = i),
              (i = n.width),
              (s.width = r),
              (s.minWidth = o),
              (s.maxWidth = a))),
          void 0 !== i ? i + "" : i
        );
      }
      function Ve(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ae.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (i = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (a = 12 === t(c.offsetWidth / 3)),
              ae.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          a,
          i,
          s,
          l,
          u = v.createElement("div"),
          c = v.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
          T.extend(m, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), i;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), a;
            },
            reliableTrDimensions: function () {
              var e, t, r, o;
              return (
                null == s &&
                  ((e = v.createElement("table")),
                  (t = v.createElement("tr")),
                  (r = v.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  ae.appendChild(e).appendChild(t).appendChild(r),
                  (o = n.getComputedStyle(t)),
                  (s = parseInt(o.height) > 3),
                  ae.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Je = ["Webkit", "Moz", "ms"],
        Ye = v.createElement("div").style,
        Ge = {};
      function Xe(e) {
        var t = T.cssProps[e] || Ge[e];
        return (
          t ||
          (e in Ye
            ? e
            : (Ge[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Je.length;
                    n--;

                  )
                    if ((e = Je[n] + t) in Ye) return e;
                })(e) || e))
        );
      }
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function nt(e, t, n, r, o, a) {
        var i = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; i < 4; i += 2)
          "margin" === n && (l += T.css(e, n + oe[i], !0, o)),
            r
              ? ("content" === n && (l -= T.css(e, "padding" + oe[i], !0, o)),
                "margin" !== n &&
                  (l -= T.css(e, "border" + oe[i] + "Width", !0, o)))
              : ((l += T.css(e, "padding" + oe[i], !0, o)),
                "padding" !== n
                  ? (l += T.css(e, "border" + oe[i] + "Width", !0, o))
                  : (s += T.css(e, "border" + oe[i] + "Width", !0, o)));
        return (
          !r &&
            a >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    a -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function rt(e, t, n) {
        var r = ze(e),
          o =
            (!m.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, r),
          a = o,
          i = $e(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(i)) {
          if (!n) return i;
          i = "auto";
        }
        return (
          ((!m.boxSizingReliable() && o) ||
            (!m.reliableTrDimensions() && j(e, "tr")) ||
            "auto" === i ||
            (!parseFloat(i) && "inline" === T.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((o = "border-box" === T.css(e, "boxSizing", !1, r)),
            (a = s in e) && (i = e[s])),
          (i = parseFloat(i) || 0) +
            nt(e, t, n || (o ? "border" : "content"), a, r, i) +
            "px"
        );
      }
      function ot(e, t, n, r, o) {
        return new ot.prototype.init(e, t, n, r, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = $e(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              a,
              i,
              s = Y(t),
              l = Qe.test(t),
              u = e.style;
            if (
              (l || (t = Xe(s)),
              (i = T.cssHooks[t] || T.cssHooks[s]),
              void 0 === n)
            )
              return i && "get" in i && void 0 !== (o = i.get(e, !1, r))
                ? o
                : u[t];
            "string" === (a = typeof n) &&
              (o = re.exec(n)) &&
              o[1] &&
              ((n = ue(e, t, o)), (a = "number")),
              null != n &&
                n == n &&
                ("number" !== a ||
                  l ||
                  (n += (o && o[3]) || (T.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (i && "set" in i && void 0 === (n = i.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var o,
            a,
            i,
            s = Y(t);
          return (
            Qe.test(t) || (t = Xe(s)),
            (i = T.cssHooks[t] || T.cssHooks[s]) &&
              "get" in i &&
              (o = i.get(e, !0, n)),
            void 0 === o && (o = $e(e, t, r)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n
              ? ((a = parseFloat(o)), !0 === n || isFinite(a) ? a || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ke.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : _e(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var o,
                a = ze(e),
                i = !m.scrollboxSize() && "absolute" === a.position,
                s = (i || r) && "border-box" === T.css(e, "boxSizing", !1, a),
                l = r ? nt(e, t, r, s, a) : 0;
              return (
                s &&
                  i &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(a[t]) -
                      nt(e, t, "border", !1, a) -
                      0.5
                  )),
                l &&
                  (o = re.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                tt(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat($e(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  _e(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  o = {},
                  a = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                o[e + oe[r] + t] = a[r] || a[r - 2] || a[0];
              return o;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = tt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var r,
                  o,
                  a = {},
                  i = 0;
                if (Array.isArray(t)) {
                  for (r = ze(e), o = t.length; i < o; i++)
                    a[t[i]] = T.css(e, t[i], !1, r);
                  return a;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function (e, t, n, r, o, a) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = a || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          },
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = ot.prototype.init),
        (T.fx.step = {});
      var at,
        it,
        st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ut() {
        it &&
          (!1 === v.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ut)
            : n.setTimeout(ut, T.fx.interval),
          T.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function ht(e, t) {
        var n,
          r = 0,
          o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          o["margin" + (n = oe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function dt(e, t, n) {
        for (
          var r,
            o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
            a = 0,
            i = o.length;
          a < i;
          a++
        )
          if ((r = o[a].call(n, t, e))) return r;
      }
      function ft(e, t, n) {
        var r,
          o,
          a = 0,
          i = ft.prefilters.length,
          s = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = at || ct(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = 1 - (n / u.duration || 0),
                a = 0,
                i = u.tweens.length;
              a < i;
              a++
            )
              u.tweens[a].run(r);
            return (
              s.notifyWith(e, [u, r, n]),
              r < 1 && i
                ? n
                : (i || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            );
          },
          u = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: at || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = T.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) u.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                  : s.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (e, t) {
            var n, r, o, a, i;
            for (n in e)
              if (
                ((o = t[(r = Y(n))]),
                (a = e[n]),
                Array.isArray(a) && ((o = a[1]), (a = e[n] = a[0])),
                n !== r && ((e[r] = a), delete e[n]),
                (i = T.cssHooks[r]) && ("expand" in i))
              )
                for (n in ((a = i.expand(a)), delete e[r], a))
                  (n in e) || ((e[n] = a[n]), (t[n] = o));
              else t[r] = o;
          })(c, u.opts.specialEasing);
          a < i;
          a++
        )
          if ((r = ft.prefilters[a].call(u, e, c, u.opts)))
            return (
              y(r.stop) &&
                (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          T.map(c, dt, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ft, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          y(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]),
              (ft.tweeners[n] = ft.tweeners[n] || []),
              ft.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              a,
              i,
              s,
              l,
              u,
              c,
              h = "width" in t || "height" in t,
              d = this,
              f = {},
              p = e.style,
              g = e.nodeType && le(e),
              m = K.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (i = T._queueHooks(e, "fx")).unqueued &&
                ((i.unqueued = 0),
                (s = i.empty.fire),
                (i.empty.fire = function () {
                  i.unqueued || s();
                })),
              i.unqueued++,
              d.always(function () {
                d.always(function () {
                  i.unqueued--, T.queue(e, "fx").length || i.empty.fire();
                });
              })),
            t))
              if (((o = t[r]), st.test(o))) {
                if (
                  (delete t[r],
                  (a = a || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                f[r] = (m && m[r]) || T.style(e, r);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
              for (r in (h &&
                1 === e.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (u = m && m.display) && (u = K.get(e, "display")),
                "none" === (c = T.css(e, "display")) &&
                  (u
                    ? (c = u)
                    : (de([e], !0),
                      (u = e.style.display || u),
                      (c = T.css(e, "display")),
                      de([e]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      p.display = u;
                    }),
                    null == u &&
                      ((c = p.display), (u = "none" === c ? "" : c))),
                  (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                d.always(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = K.access(e, "fxshow", { display: u })),
                  a && (m.hidden = !g),
                  g && de([e], !0),
                  d.done(function () {
                    for (r in (g || de([e]), K.remove(e, "fxshow"), f))
                      T.style(e, r, f[r]);
                  })),
                  (l = dt(g ? m[r] : 0, r, d)),
                  r in m ||
                    ((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t),
                };
          return (
            T.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in T.fx.speeds
                  ? (r.duration = T.fx.speeds[r.duration])
                  : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = T.isEmptyObject(e),
              a = T.speed(t, n, r),
              i = function () {
                var t = ft(this, T.extend({}, e), a);
                (o || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (i.finish = i),
              o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  a = T.timers,
                  i = K.get(this);
                if (o) i[o] && i[o].stop && r(i[o]);
                else for (o in i) i[o] && i[o].stop && lt.test(o) && r(i[o]);
                for (o = a.length; o--; )
                  a[o].elem !== this ||
                    (null != e && a[o].queue !== e) ||
                    (a[o].anim.stop(n), (t = !1), a.splice(o, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = K.get(this),
                  r = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  a = T.timers,
                  i = r ? r.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = a.length;
                  t--;

                )
                  a[t].elem === this &&
                    a[t].queue === e &&
                    (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < i; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, r, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ht(t, !0), e, r, o);
          };
        }),
        T.each(
          {
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (at = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          it || ((it = !0), ut());
        }),
        (T.fx.stop = function () {
          it = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = v.createElement("input"),
            t = v
              .createElement("select")
              .appendChild(v.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = v.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var pt,
        gt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return U(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var r,
              o,
              a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === a && T.isXMLDoc(e)) ||
                    (o =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? pt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && j(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(P);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); ) e.removeAttribute(n);
          },
        }),
        (pt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || T.find.attr;
          gt[t] = function (e, t, r) {
            var o,
              a,
              i = t.toLowerCase();
            return (
              r ||
                ((a = gt[i]),
                (gt[i] = o),
                (o = null != n(e, t, r) ? i : null),
                (gt[i] = a)),
              o
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      function bt(e) {
        return (e.match(P) || []).join(" ");
      }
      function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function wt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(P)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return U(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var r,
              o,
              a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
              return (
                (1 === a && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && "get" in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              o,
              a,
              i,
              s,
              l = 0;
            if (y(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, vt(this)));
              });
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = vt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                ) {
                  for (i = 0; (a = t[i++]); )
                    r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                  o !== (s = bt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              o,
              a,
              i,
              s,
              l = 0;
            if (y(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, vt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = vt(n)), (r = 1 === n.nodeType && " " + bt(o) + " "))
                ) {
                  for (i = 0; (a = t[i++]); )
                    for (; r.indexOf(" " + a + " ") > -1; )
                      r = r.replace(" " + a + " ", " ");
                  o !== (s = bt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, vt(this), t), t);
                })
              : this.each(function () {
                  var t, o, a, i;
                  if (r)
                    for (o = 0, a = T(this), i = wt(e); (t = i[o++]); )
                      a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = vt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + bt(vt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = y(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, T(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = T.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(xt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : bt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  a = e.selectedIndex,
                  i = "select-one" === e.type,
                  s = i ? null : [],
                  l = i ? a + 1 : o.length;
                for (r = a < 0 ? l : i ? a : 0; r < l; r++)
                  if (
                    ((n = o[r]).selected || r === a) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), i)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, o = e.options, a = T.makeArray(t), i = o.length;
                  i--;

                )
                  ((r = o[i]).selected =
                    T.inArray(T.valHooks.option.get(r), a) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), a;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var kt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, r, o) {
          var a,
            i,
            s,
            l,
            u,
            c,
            h,
            d,
            p = [r || v],
            g = f.call(e, "type") ? e.type : e,
            m = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((i = d = s = r = r || v),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !kt.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (h = T.event.special[g] || {}),
              o || !h.trigger || !1 !== h.trigger.apply(r, t)))
          ) {
            if (!o && !h.noBubble && !b(r)) {
              for (
                l = h.delegateType || g, kt.test(l + g) || (i = i.parentNode);
                i;
                i = i.parentNode
              )
                p.push(i), (s = i);
              s === (r.ownerDocument || v) &&
                p.push(s.defaultView || s.parentWindow || n);
            }
            for (a = 0; (i = p[a++]) && !e.isPropagationStopped(); )
              (d = i),
                (e.type = a > 1 ? l : h.bindType || g),
                (c =
                  (K.get(i, "events") || Object.create(null))[e.type] &&
                  K.get(i, "handle")) && c.apply(i, t),
                (c = u && i[u]) &&
                  c.apply &&
                  G(i) &&
                  ((e.result = c.apply(i, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(p.pop(), t)) ||
                !G(r) ||
                (u &&
                  y(r[g]) &&
                  !b(r) &&
                  ((s = r[u]) && (r[u] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, Tt),
                  r[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, Tt),
                  (T.event.triggered = void 0),
                  s && (r[u] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = K.access(r, t);
                o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = K.access(r, t) - 1;
                o
                  ? K.access(r, t, o)
                  : (r.removeEventListener(e, n, !0), K.remove(r, t));
              },
            };
          });
      var Ct = n.location,
        St = { guid: Date.now() },
        At = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var Et = /\[\]$/,
        Nt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
      function It(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          T.each(t, function (t, o) {
            n || Et.test(e)
              ? r(e, o)
              : It(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  r
                );
          });
        else if (n || "object" !== k(t)) r(e, t);
        else for (o in t) It(e + "[" + o + "]", t[o], n, r);
      }
      (T.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = y(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) It(n, e[n], t, o);
        return r.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Dt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(Nt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Nt, "\r\n") };
              })
              .get();
          },
        });
      var Mt = /%20/g,
        Lt = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Bt = {},
        Rt = {},
        Wt = "*/".concat("*"),
        Ft = v.createElement("a");
      function zt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            o = 0,
            a = t.toLowerCase().match(P) || [];
          if (y(n))
            for (; (r = a[o++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function _t(e, t, n, r) {
        var o = {},
          a = e === Rt;
        function i(s) {
          var l;
          return (
            (o[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var u = s(t, n, r);
              return "string" != typeof u || a || o[u]
                ? a
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), i(u), !1);
            }),
            l
          );
        }
        return i(t.dataTypes[0]) || (!o["*"] && i("*"));
      }
      function Ut(e, t) {
        var n,
          r,
          o = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (Ft.href = Ct.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ct.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Wt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
          },
          ajaxPrefilter: zt(Bt),
          ajaxTransport: zt(Rt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              a,
              i,
              s,
              l,
              u,
              c,
              h,
              d,
              f = T.ajaxSetup({}, t),
              p = f.context || f,
              g = f.context && (p.nodeType || p.jquery) ? T(p) : T.event,
              m = T.Deferred(),
              y = T.Callbacks("once memory"),
              b = f.statusCode || {},
              w = {},
              x = {},
              k = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!i)
                      for (i = {}; (t = Ot.exec(a)); )
                        i[t[1].toLowerCase() + " "] = (
                          i[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = i[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? a : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) C.always(e[C.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || k;
                  return r && r.abort(t), S(0, t), this;
                },
              };
            if (
              (m.promise(C),
              (f.url = ((e || f.url || Ct.href) + "").replace(
                Pt,
                Ct.protocol + "//"
              )),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = v.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = T.param(f.data, f.traditional)),
              _t(Bt, f, t, C),
              u)
            )
              return C;
            for (h in ((c = T.event && f.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Ht.test(f.type)),
            (o = f.url.replace(Lt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(Mt, "+"))
              : ((d = f.url.slice(o.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((o += (At.test(o) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((o = o.replace(qt, "$1")),
                  (d = (At.test(o) ? "&" : "?") + "_=" + St.guid++ + d)),
                (f.url = o + d)),
            f.ifModified &&
              (T.lastModified[o] &&
                C.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              C.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || u))
              return C.abort();
            if (
              ((k = "abort"),
              y.add(f.complete),
              C.done(f.success),
              C.fail(f.error),
              (r = _t(Rt, f, t, C)))
            ) {
              if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, f]), u))
                return C;
              f.async &&
                f.timeout > 0 &&
                (s = n.setTimeout(function () {
                  C.abort("timeout");
                }, f.timeout));
              try {
                (u = !1), r.send(w, S);
              } catch (e) {
                if (u) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");
            function S(e, t, i, l) {
              var h,
                d,
                v,
                w,
                x,
                k = t;
              u ||
                ((u = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (a = l || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (h = (e >= 200 && e < 300) || 304 === e),
                i &&
                  (w = (function (e, t, n) {
                    for (
                      var r, o, a, i, s = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in s)
                        if (s[o] && s[o].test(r)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) a = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          a = o;
                          break;
                        }
                        i || (i = o);
                      }
                      a = a || i;
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a];
                  })(f, C, i)),
                !h &&
                  T.inArray("script", f.dataTypes) > -1 &&
                  (f.converters["text script"] = function () {}),
                (w = (function (e, t, n, r) {
                  var o,
                    a,
                    i,
                    s,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (i in e.converters)
                      u[i.toLowerCase()] = e.converters[i];
                  for (a = c.shift(); a; )
                    if (
                      (e.responseFields[a] && (n[e.responseFields[a]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = a),
                      (a = c.shift()))
                    )
                      if ("*" === a) a = l;
                      else if ("*" !== l && l !== a) {
                        if (!(i = u[l + " " + a] || u["* " + a]))
                          for (o in u)
                            if (
                              (s = o.split(" "))[1] === a &&
                              (i = u[l + " " + s[0]] || u["* " + s[0]])
                            ) {
                              !0 === i
                                ? (i = u[o])
                                : !0 !== u[o] && ((a = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== i)
                          if (i && e.throws) t = i(t);
                          else
                            try {
                              t = i(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: i
                                  ? e
                                  : "No conversion from " + l + " to " + a,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, w, C, h)),
                h
                  ? (f.ifModified &&
                      ((x = C.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = x),
                      (x = C.getResponseHeader("etag")) && (T.etag[o] = x)),
                    204 === e || "HEAD" === f.type
                      ? (k = "nocontent")
                      : 304 === e
                      ? (k = "notmodified")
                      : ((k = w.state), (d = w.data), (h = !(v = w.error))))
                  : ((v = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || k) + ""),
                h ? m.resolveWith(p, [d, k, C]) : m.rejectWith(p, [C, k, v]),
                C.statusCode(b),
                (b = void 0),
                c &&
                  g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : v]),
                y.fireWith(p, [C, k]),
                c &&
                  (g.trigger("ajaxComplete", [C, f]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, r, o) {
            return (
              y(n) && ((o = o || r), (r = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: o, data: n, success: r },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return y(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = y(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var $t = { 0: 200, 1223: 204 },
        Vt = T.ajaxSettings.xhr();
      (m.cors = !!Vt && "withCredentials" in Vt),
        (m.ajax = Vt = !!Vt),
        T.ajaxTransport(function (e) {
          var t, r;
          if (m.cors || (Vt && !e.crossDomain))
            return {
              send: function (o, a) {
                var i,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (i in e.xhrFields) s[i] = e.xhrFields[i];
                for (i in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  s.setRequestHeader(i, o[i]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? a(0, "error")
                          : a(s.status, s.statusText)
                        : a(
                            $t[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  v.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Jt,
        Yt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Yt.pop() || T.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, r) {
          var o,
            a,
            i,
            s =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Gt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = y(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Gt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return i || T.error(o + " was not called"), i[0];
              }),
              (e.dataTypes[0] = "json"),
              (a = n[o]),
              (n[o] = function () {
                i = arguments;
              }),
              r.always(function () {
                void 0 === a ? T(n).removeProp(o) : (n[o] = a),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(o)),
                  i && y(a) && a(i[0]),
                  (i = a = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Jt = v.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Jt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t = v.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = v.location.href),
                    t.head.appendChild(r))
                  : (t = v)),
              (a = !n && []),
              (o = D.exec(e))
                ? [t.createElement(o[1])]
                : ((o = ke([e], t, a)),
                  a && a.length && T(a).remove(),
                  T.merge([], o.childNodes)));
          var r, o, a;
        }),
        (T.fn.load = function (e, t, n) {
          var r,
            o,
            a,
            i = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            i.length > 0 &&
              T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (a = arguments),
                    i.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      i.each(function () {
                        n.apply(this, a || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              a,
              i,
              s,
              l,
              u = T.css(e, "position"),
              c = T(e),
              h = {};
            "static" === u && (e.style.position = "relative"),
              (s = c.offset()),
              (a = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === u || "fixed" === u) &&
              (a + l).indexOf("auto") > -1
                ? ((i = (r = c.position()).top), (o = r.left))
                : ((i = parseFloat(a) || 0), (o = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (h.top = t.top - s.top + i),
              null != t.left && (h.left = t.left - s.left + o),
              "using" in t
                ? t.using.call(e, h)
                : ("number" == typeof h.top && (h.top += "px"),
                  "number" == typeof h.left && (h.left += "px"),
                  c.css(h));
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (o.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - T.css(r, "marginTop", !0),
                left: t.left - o.left - T.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || ae;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return U(
                this,
                function (e, r, o) {
                  var a;
                  if (
                    (b(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView),
                    void 0 === o)
                  )
                    return a ? a[t] : e[r];
                  a
                    ? a.scrollTo(n ? a.pageXOffset : o, n ? o : a.pageYOffset)
                    : (e[r] = o);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Ve(m.pixelPosition, function (e, n) {
            if (n)
              return (n = $e(e, t)), Fe.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              T.fn[r] = function (o, a) {
                var i = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === a ? "margin" : "border");
                return U(
                  this,
                  function (t, n, o) {
                    var a;
                    return b(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((a = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          a["scroll" + e],
                          t.body["offset" + e],
                          a["offset" + e],
                          a["client" + e]
                        ))
                      : void 0 === o
                      ? T.css(t, n, s)
                      : T.style(t, n, o, s);
                  },
                  t,
                  i ? o : void 0,
                  i
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
          return (
            (r = s.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || T.guid++),
            o
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = j),
        (T.isFunction = y),
        (T.isWindow = b),
        (T.camelCase = Y),
        (T.type = k),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Xt, "");
        }),
        void 0 ===
          (r = function () {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Kt = n.jQuery,
        Qt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Qt), e && n.jQuery === T && (n.jQuery = Kt), T
          );
        }),
        void 0 === o && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    var r = {
      "./at_at.svg": 10,
      "./c3po.svg": 11,
      "./cruiser.svg": 12,
      "./darth_vader.svg": 13,
      "./death_star.svg": 14,
      "./falcon.svg": 15,
      "./r2d2.svg": 16,
      "./stormtrooper.svg": 17,
      "./tie_ln.svg": 18,
      "./yoda.svg": 19,
    };
    function o(e) {
      var t = a(e);
      return n(t);
    }
    function a(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (o.keys = function () {
      return Object.keys(r);
    }),
      (o.resolve = a),
      (e.exports = o),
      (o.id = 9);
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "0379613a4269155f45b325b9c8ade309.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "92e4eecf1c83293e3395a3cd1b84693b.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "b8b7453248e1707d44a072fa15bea3f9.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "9ae79499243776a4de6e6a6c25ec9798.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "3392ebef20e51148368ecc5969498f64.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "b33cd68d7fb870c5930919ddfc0933b1.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "a97a2e9fa184dcab972b10738af89c32.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "61e5b40f641dff097d3fe85e9fa07beb.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "7d600c80a7f5f31bc33716b7d9b72515.svg");
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "4c0ad8f5f10199effb77a3e746d0ff55.svg");
  },
  function (e, t, n) {
    var r = n(21),
      o = n(22);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = (r(o, a), o.locals ? o.locals : {});
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function s(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var a = e[o],
          l = t.base ? a[0] + t.base : a[0],
          u = n[l] || 0,
          c = "".concat(l, " ").concat(u);
        n[l] = u + 1;
        var h = s(c),
          d = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== h
          ? (i[h].references++, i[h].updater(d))
          : i.push({ identifier: c, updater: m(d, t), references: 1 }),
          r.push(c);
      }
      return r;
    }
    function u(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = a(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var c,
      h =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = h(t, o);
      else {
        var a = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
      }
    }
    function f(e, t, n) {
      var r = n.css,
        o = n.media,
        a = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var p = null,
      g = 0;
    function m(e, t) {
      var n, r, o;
      if (t.singleton) {
        var a = g++;
        (n = p || (p = u(t))),
          (r = d.bind(null, n, a, !1)),
          (o = d.bind(null, n, a, !0));
      } else
        (n = u(t)),
          (r = f.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = s(n[r]);
            i[o].references--;
          }
          for (var a = l(e, t), u = 0; u < n.length; u++) {
            var c = s(n[u]);
            0 === i[c].references && (i[c].updater(), i.splice(c, 1));
          }
          n = a;
        }
      };
    };
  },
  function (e, t, n) {
    (t = n(23)(!1)).push([
      e.i,
      'body {\n  width: 100vw;\n  height: 100vh;\n  padding: 1rem;\n  background-color: whitesmoke;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-family: "Roboto Condensed", sans-serif;\n}\n\n@media only screen and (max-width: 1200px) {\n  body {\n    background-color: whitesmoke;\n  }\n}\n\n#reels {\n  display: flex;\n  width: 100vw;\n  height: calc((3 / 5) * 100vw);\n  max-height: calc(90vh - 50px - 40px);\n  max-width: calc((5 / 3) * (90vh - 50px - 40px));\n}\n\n.reel {\n  overflow: hidden;\n  width: 20%;\n  height: 100%;\n}\n\n.reel > .icons > img {\n  width: calc(100% + 6px);\n  margin: -3px 0 0 -3px;\n  height: auto;\n}\n\ninput[type="checkbox"] {\n  width: 40px;\n  height: 40px;\n}\n\n#slot {\n  display: flex;\n  flex-direction: row;\n}\n\n#slot.inverted .reel {\n  transform: scaleY(-1);\n}\n\n#slot.inverted .reel > .icons > img {\n  transform: scaleY(-1);\n}\n\n#spin {\n  width: 50%;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#goodbye {\n  display: none;\n}\n\n.blur {\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\n  filter: blur(5px);\n}\n\n/*  Knob */\n#knob {\n  /*width: 200vw;*/\n}\n\n#slot-trigger {\n  display: flex;\n  cursor: pointer;\n  position: absolute;\n  height: calc((3 / 5) * 100vw);\n  max-height: calc(90vh - 50px - 40px);\n}\n\n#slot-trigger div {\n  position: absolute;\n  top: 0;\n}\n\n#slot-trigger .ring1 {\n  background: #282828;\n  background: -moz-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    color-stop(0%, #282828),\n    color-stop(14%, #959595),\n    color-stop(37%, #d1d1d1),\n    color-stop(49%, #bababa),\n    color-stop(67%, #959595),\n    color-stop(100%, #212121)\n  );\n  background: -webkit-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -o-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -ms-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  -moz-border-radius: 0 2px 2px 0;\n  -webkit-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -moz-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  height: 100%;\n  left: 0;\n  width: 24px;\n  z-index: 2;\n}\n\n#slot-trigger .ring1 .shadow {\n  background: -moz-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.2) 0%,\n    rgba(13, 13, 13, 0.18) 46%,\n    rgba(1, 1, 1, 0.18) 50%,\n    rgba(10, 10, 10, 0.18) 53%,\n    rgba(78, 78, 78, 0.17) 76%,\n    rgba(56, 56, 56, 0.16) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    color-stop(0%, rgba(149, 149, 149, 0.2)),\n    color-stop(46%, rgba(13, 13, 13, 0.18)),\n    color-stop(50%, rgba(1, 1, 1, 0.18)),\n    color-stop(53%, rgba(10, 10, 10, 0.18)),\n    color-stop(76%, rgba(78, 78, 78, 0.17)),\n    color-stop(87%, rgba(56, 56, 56, 0.16)),\n    color-stop(100%, rgba(27, 27, 27, 0.15))\n  );\n  background: -webkit-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.2) 0%,\n    rgba(13, 13, 13, 0.18) 46%,\n    rgba(1, 1, 1, 0.18) 50%,\n    rgba(10, 10, 10, 0.18) 53%,\n    rgba(78, 78, 78, 0.17) 76%,\n    rgba(56, 56, 56, 0.16) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -o-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.2) 0%,\n    rgba(13, 13, 13, 0.18) 46%,\n    rgba(1, 1, 1, 0.18) 50%,\n    rgba(10, 10, 10, 0.18) 53%,\n    rgba(78, 78, 78, 0.17) 76%,\n    rgba(56, 56, 56, 0.16) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -ms-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.2) 0%,\n    rgba(13, 13, 13, 0.18) 46%,\n    rgba(1, 1, 1, 0.18) 50%,\n    rgba(10, 10, 10, 0.18) 53%,\n    rgba(78, 78, 78, 0.17) 76%,\n    rgba(56, 56, 56, 0.16) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    rgba(149, 149, 149, 0.2) 0%,\n    rgba(13, 13, 13, 0.18) 46%,\n    rgba(1, 1, 1, 0.18) 50%,\n    rgba(10, 10, 10, 0.18) 53%,\n    rgba(78, 78, 78, 0.17) 76%,\n    rgba(56, 56, 56, 0.16) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  -moz-border-radius: 0 2px 2px 0;\n  -webkit-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  height: 50%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 30px;\n  z-index: 1;\n}\n\n#slot-trigger .ring2 {\n  background: #282828;\n  background: -moz-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    color-stop(0%, #282828),\n    color-stop(14%, #959595),\n    color-stop(37%, #d1d1d1),\n    color-stop(49%, #bababa),\n    color-stop(67%, #959595),\n    color-stop(100%, #212121)\n  );\n  background: -webkit-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -o-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: -ms-linear-gradient(\n    top,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    #282828 0%,\n    #959595 14%,\n    #d1d1d1 37%,\n    #bababa 49%,\n    #959595 67%,\n    #212121 100%\n  );\n  -moz-border-radius: 0 2px 2px 0;\n  -webkit-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -moz-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.8);\n  height: 80%;\n  left: 8px;\n  overflow: hidden;\n  top: 10%;\n  width: 30px;\n  z-index: 1;\n}\n\n#slot-trigger .ring2 .shadow {\n  background: -moz-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.15) 0%,\n    rgba(13, 13, 13, 0.15) 46%,\n    rgba(1, 1, 1, 0.15) 50%,\n    rgba(10, 10, 10, 0.15) 53%,\n    rgba(78, 78, 78, 0.15) 76%,\n    rgba(56, 56, 56, 0.15) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    color-stop(0%, rgba(149, 149, 149, 0.15)),\n    color-stop(46%, rgba(13, 13, 13, 0.15)),\n    color-stop(50%, rgba(1, 1, 1, 0.15)),\n    color-stop(53%, rgba(10, 10, 10, 0.15)),\n    color-stop(76%, rgba(78, 78, 78, 0.15)),\n    color-stop(87%, rgba(56, 56, 56, 0.15)),\n    color-stop(100%, rgba(27, 27, 27, 0.15))\n  );\n  background: -webkit-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.15) 0%,\n    rgba(13, 13, 13, 0.15) 46%,\n    rgba(1, 1, 1, 0.15) 50%,\n    rgba(10, 10, 10, 0.15) 53%,\n    rgba(78, 78, 78, 0.15) 76%,\n    rgba(56, 56, 56, 0.15) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -o-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.15) 0%,\n    rgba(13, 13, 13, 0.15) 46%,\n    rgba(1, 1, 1, 0.15) 50%,\n    rgba(10, 10, 10, 0.15) 53%,\n    rgba(78, 78, 78, 0.15) 76%,\n    rgba(56, 56, 56, 0.15) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: -ms-linear-gradient(\n    top,\n    rgba(149, 149, 149, 0.15) 0%,\n    rgba(13, 13, 13, 0.15) 46%,\n    rgba(1, 1, 1, 0.15) 50%,\n    rgba(10, 10, 10, 0.15) 53%,\n    rgba(78, 78, 78, 0.15) 76%,\n    rgba(56, 56, 56, 0.15) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    rgba(149, 149, 149, 0.15) 0%,\n    rgba(13, 13, 13, 0.15) 46%,\n    rgba(1, 1, 1, 0.15) 50%,\n    rgba(10, 10, 10, 0.15) 53%,\n    rgba(78, 78, 78, 0.15) 76%,\n    rgba(56, 56, 56, 0.15) 87%,\n    rgba(27, 27, 27, 0.15) 100%\n  );\n  -moz-border-radius: 0 2px 2px 0;\n  -webkit-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  height: 50%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 30px;\n  z-index: 1;\n}\n\n#slot-trigger .arm {\n  background: #0d0d0d;\n  background: -moz-linear-gradient(\n    left,\n    #0d0d0d 0%,\n    #4e4e4e 47%,\n    #383838 87%,\n    #1b1b1b 100%\n  );\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(0%, #0d0d0d),\n    color-stop(47%, #4e4e4e),\n    color-stop(87%, #383838),\n    color-stop(100%, #1b1b1b)\n  );\n  background: -webkit-linear-gradient(\n    left,\n    #0d0d0d 0%,\n    #4e4e4e 47%,\n    #383838 87%,\n    #1b1b1b 100%\n  );\n  background: -o-linear-gradient(\n    left,\n    #0d0d0d 0%,\n    #4e4e4e 47%,\n    #383838 87%,\n    #1b1b1b 100%\n  );\n  background: -ms-linear-gradient(\n    left,\n    #0d0d0d 0%,\n    #4e4e4e 47%,\n    #383838 87%,\n    #1b1b1b 100%\n  );\n  background: linear-gradient(\n    to right,\n    #0d0d0d 0%,\n    #4e4e4e 47%,\n    #383838 87%,\n    #1b1b1b 100%\n  );\n  -moz-border-radius: 0 0 4px 4px;\n  -webkit-border-radius: 0 0 4px 4px;\n  border-radius: 0 0 4px 4px;\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8);\n  height: 50%;\n  left: 35px;\n  top: -25px;\n  width: 18px;\n  z-index: 3;\n  overflow: visible !important;\n}\n\n#slot-trigger .arm .knob {\n  background: #ff6363;\n  background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #ff6363 0%,\n    #cf0404 100%\n  );\n  background: -webkit-gradient(\n    radial,\n    center center,\n    0px,\n    center center,\n    100%,\n    color-stop(0%, #ff6363),\n    color-stop(100%, #cf0404)\n  );\n  background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #ff6363 0%,\n    #cf0404 100%\n  );\n  background: -o-radial-gradient(\n    center,\n    ellipse cover,\n    #ff6363 0%,\n    #cf0404 100%\n  );\n  background: -ms-radial-gradient(\n    center,\n    ellipse cover,\n    #ff6363 0%,\n    #cf0404 100%\n  );\n  background: radial-gradient(ellipse at center, #ff6363 0%, #cf0404 100%);\n  -moz-border-radius: 30px;\n  -webkit-border-radius: 30px;\n  border-radius: 30px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  height: 60px;\n  left: -21px;\n  top: -40px;\n  width: 60px;\n  z-index: 4;\n}\n\n#slot-trigger .arm-shadow {\n  background: #000;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  border-radius: 10px;\n  bottom: 66px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  left: 9px;\n  top: auto;\n  width: 24px;\n  z-index: 2;\n}\n\n#slotTrigger.slotTriggerDown {\n  background-position: 0px -34px;\n}\n\n#slotTrigger.slotTriggerDisabled {\n  background-position: 0px -68px;\n  display: none;\n}\n',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(l, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(a).concat([o]).join("\n");
              }
              var i, s, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              null != i && (o[i] = !0);
            }
          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            (r && o[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              t.push(l));
          }
        }),
        t
      );
    };
  },
]);
