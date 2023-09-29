import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  const imageStyle = {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
  };

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image.jpg"
          alt="Kawaiihito"
          width={700}
          height={700}
          style={imageStyle}
        />
      </div>
      <h1>Hello,I'm Kei</h1>
      <p>(✿✪‿✪｡)ﾉｺﾝﾁｬ♡</p>
    </section>
  );
}

export default Hero;
