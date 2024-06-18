import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import Card from "./components/Card";

const cartas = [
  {
    id: "MAGO",
    carta: "Mago Negro",
    power: 2500,
    image:
      "https://img.mypcards.com/img/3/1349/yugioh_mago-en002/yugioh_mago-en002_pt.jpg",
    selected: false,
  },
  {
    id: "EXODIA",
    carta: "Exódia",
    power: 8000,
    image:
      "https://img.mypcards.com/img/3/1222/yugioh_lart_en004/yugioh_lart_en004_en.jpg",
    selected: false,
  },
  {
    id: "REI_CAVEIRA",
    carta: "Rei Caveira",
    power: 3500,
    image:
      "https://img.mypcards.com/img/3/1304/yugioh_blar_en006/yugioh_blar_en006_en.jpg",
    selected: false,
  },
  {
    id: "DRAGAO_BEBE",
    carta: "Dragão Bebê",
    power: 1000,
    image:
      "https://repositorio.sbrauble.com/arquivos/in/yugioh_bkp/cd/1058/3.MRD-EN061s.jpg",
    selected: false,
  },
  {
    id: "OLHOS_AZUIS",
    carta: "Dragão Definitivo",
    power: 4500,
    image:
      "https://i.pinimg.com/474x/b4/84/6c/b4846c93e0130081d560cb9f9f1bd572.jpg",
    selected: false,
  },
  {
    id: "DRAGAO_NEGRO",
    carta: "Dragão Negro",
    power: 2400,
    image:
      "https://img.mypcards.com/img/3/1615/yugioh_mged_en003/yugioh_mged_en003_en.jpg",
    selected: false,
  },
  {
    id: "KARIBOH",
    carta: "Kariboh Alado",
    power: 300,
    image:
      "https://static.wikia.nocookie.net/yugioh/images/a/ac/WingedKuriboh-SDHS-PT-C-1E.jpg/revision/latest?cb=20150717162529&path-prefix=pt",
    selected: false,
  },
];

export default function App() {
  const [cards, setCards] = useState(cartas);
  const [cardA, setCardA] = useState();
  const [cardB, setCardB] = useState();
  const [result, setResult] = useState(false);
  const [winner, setWinner] = useState("");

  const duelo = () => {
    if (cardA == null || cardB == null) {
      alert("Escolha duas cartas!");
    } else {
      if (cardA.power > cardB.power) {
        setWinner(cardA.carta);
      } else {
        setWinner(cardB.carta);
      }
      setResult(true);
      setCardA();
      setCardB();
    }
  };

  const change = (id) => {
    return cards.map((card) => {
      if (card.id == id) {
        card.selected = !card.selected;
      }
      return card;
    });
  };

  const chose = (item) => {
    let newList = cards;
    if (cardA === undefined) {
      newList = change(item.id);
      setCardA(item);
    } else if (cardB === undefined) {
      if (cardA != item) {
        newList = change(item.id);
        setCardB(item);
      }
    }
    setCards(newList);
  };

  const reset = () => {
    const list = cartas.map((card) => {
      if (card.selected) {
        card.selected = !card.selected;
      }
      return card;
    });
    setCards(list);
    setCardA();
    setCardB();
    setResult(false);
    setWinner("");
  };

  const congrats = `${winner} VENCEU!`;

  const yugioh = "Yu-Gi-Oh!";
  const duelar = "DUELAR!";
  const newBatle = "Novo Duelo";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.paragraph}>{yugioh}</Text>
      </View>
      <FlatList
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cards}
        renderItem={({ item }) => (
          <Pressable onPress={() => chose(item)}>
            <Card image={item.image} id={item.carta} selected={item.selected} />
          </Pressable>
        )}
      />
      <View style={styles.congratsContainer}>
        {result ? (
          <Text style={styles.congrats}>{congrats}</Text>
        ) : (
          <Pressable style={styles.btn} onPress={duelo}>
            <Text style={styles.btnTxt}>{duelar}</Text>
          </Pressable>
        )}
      </View>
      <Pressable style={styles.btn} onPress={reset}>
        <Text style={styles.btnTxt}>{newBatle}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  top: {
    backgroundColor: "red",
    paddingTop: 20,
    marginBottom: 40,
  },
  list: {
    marginStart: 15,
    maxHeight: 350,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: "red",
    paddingVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  btnTxt: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  congrats: {
    textAlign: "center",
    fontSize: 36,
  },
  congratsContainer: {
    marginVertical: 60,
    height: 90
  }
});
