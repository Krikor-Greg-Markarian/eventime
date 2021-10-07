// import styles from "../styles/mainContainer.css";
import cn from "classnames";
import Eventimeitem from "../Src/Componnets/Eventimeitem";
import Card from "../Src/Componnets/Card";
import CardItems from "../Src/Componnets/CardItems";
import Box from "../Src/Componnets/Box";

const eventime = [
  {
    title: "EVENTIME - CORPORATE EVENT LANDING WORDPRESS THEME",
    smallTitle: "Making Event Worpress Theme",
    description:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, veli illium dolore eu feugiat nulla facillisis...",
    priceTag: "Price:",
    price: "$39",
    sold: "670 sold",
    likes: "120",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg",
  },
];

const manyTexts = [
  {
    name: "Free",
    dolorSign: "$",
    price: "0",
    per: "per",
    month: "month",
    ButtonName: "Get started",
    priceTextColor: "bg-blue-600",
    buttonBackgroundColor: "",
    buttonTextColor: "",

    items: [
      { text: "20 millions tracks", hasFeature: true },
      { text: "Shuffle play", hasFeature: true },
      { text: "No ads", hasFeature: false },
      { text: "Get unlimited skips", hasFeature: false },
      { text: "Offline mode", hasFeature: false },
      { text: "7 profiles", hasFeature: false },
    ],
  },
  {
    name: "Premium",
    dolorSign: "$",
    price: "10",
    per: "per",
    month: "month",
    ButtonName: "Get started",
    priceTextColor: "bg-blue-600",
    nameBackgroundColor: "bg-blue-300",
    buttonBackgroundColor: "bg-blue-400",
    buttonTextColor: "text-white",
    borderColor: "border-2 border-red-300",

    items: [
      { text: "20 millions tracks", hasFeature: true },
      { text: "Shuffle play", hasFeature: true },
      { text: "No ads", hasFeature: true },
      { text: "Get unlimited skips", hasFeature: true },
      { text: "Offline mode", hasFeature: true },
      { text: "7 profiles", hasFeature: true },
    ],
  },
  {
    name: "Family",
    dolorSign: "$",
    price: "15",
    per: "per",
    month: "month",
    ButtonName: "Get started",
    priceTextColor: "bg-blue-600",
    buttonBackgroundColor: "",
    buttonTextColor: "",

    items: [
      { text: "20 millions tracks", hasFeature: true },
      { text: "Shuffle play", hasFeature: true },
      { text: "No ads", hasFeature: true },
      { text: "Get unlimited skips", hasFeature: true },
      { text: "Offline mode", hasFeature: true },
      { text: "7 profiles", hasFeature: true },
    ],
  },
];

const phantom = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/01/11/21/27/laptop-3076957__340.jpg",
    secondImageUrl: "",
    title: "PHANTOM BUSINESS JOOMLA TEMPLATE",
    description: "Making phantom joomla template",
    discount: "$30",
  },
];

export default function Home(props) {
  return (
    <div>
      <section className={cn("bg-black py-12 p-20")}>
        {eventime.map((item, idx) => (
          <Eventimeitem
            title={item.title}
            smallTitle={item.smallTitle}
            description={item.description}
            price={item.price}
            priceTag={item.priceTag}
            sold={item.sold}
            likes={item.likes}
            imageUrl={item.imageUrl}
          />
        ))}
      </section>

      <section className={cn("mt-8")}>
        <div className={cn("grid md:grid-cols-3 gap-4")}>
          {manyTexts.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <CardItems
                name={item.name}
                dolorSign={item.dolorSign}
                price={item.price}
                per={item.per}
                month={item.month}
                text={item.items}
                ButtonName={item.ButtonName}
                nameBackgroundColor={item.nameBackgroundColor}
                buttonBackgroundColor={item.buttonBackgroundColor}
                buttonTextColor={item.buttonTextColor}
                borderColor={item.borderColor}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        {phantom.map((item, idx) => (
          <Box
            imageUrl={item.imageUrl}
            secondImageUrl={item.secondImageUrl}
            title={item.title}
            description={item.description}
            discount={item.discount}
          />
        ))}
      </section>
    </div>
  );
}
