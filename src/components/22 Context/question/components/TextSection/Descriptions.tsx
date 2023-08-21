import { Paragraph } from "./Paragraph";

export const Descriptions = () => {
  const descriptions = [
    "Carrot cake pastry bonbon sugar plum tart I love chocolate cake caramels. Muffin pudding cupcake macaroon chocolate bar chupa chups donut chupa chups. Chocolate bar carrot cake jelly biscuit icing cotton candy.",
    "Bear claw croissant oat cake sesame snaps chocolate bar cotton candy dessert I love. Fruitcake dessert I love topping oat cake apple pie marzipan. Sugar plum tootsie roll shortbread soufflé lemon drops. Fruitcake gummi bears danish cupcake chocolate bar.",
    "I love shortbread tootsie roll cake tiramisu cake. Cupcake I love jelly-o chupa chups apple pie danish lemon drops sweet roll chocolate bar. Chocolate bar I love dragée icing jelly cotton candy ice cream I love.",
    "Jelly-o chocolate pastry sweet roll sweet roll tootsie roll. Croissant topping icing topping biscuit lemon drops carrot cake liquorice. Tootsie roll croissant bear claw sweet roll tootsie roll.",
    "I love wafer biscuit croissant dessert I love. Tootsie roll caramels wafer liquorice carrot cake I love. Halvah ice cream cupcake dragée jujubes brownie wafer. Tootsie roll marzipan pudding icing chocolate cake macaroon lollipop brownie.",
  ];
  return (
    <>
      {descriptions.map((description) => (
        <Paragraph>{description}</Paragraph>
      ))}
    </>
  );
};
