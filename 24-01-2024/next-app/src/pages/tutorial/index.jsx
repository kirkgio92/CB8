import { useState } from "react";
import styles from "../../styles/HowToUse.module.scss";
import Link from "next/link";

export default function HowToUse() {
  const [name, setName] = useState("");
  const [showRivalQuestion, setShowRivalQuestion] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleNameQuestion = (e) => {
    e.preventDefault();
    setShowRivalQuestion(true);
  };

  const handleRivalQuestion = (e) => {
    e.preventDefault();
    setShowTutorial(true);
  };

  return (
    <>
      <div className={styles.HowToUse}>
        <form onSubmit={handleNameQuestion}>
          <h3>Before we go to the tutorial, I need your name?</h3>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className={styles.inputName}
          />
          <button>Submit</button>
        </form>

        {showRivalQuestion && (
          <form onSubmit={handleRivalQuestion}>
            <h3>
              I see! Your name is {name} <br /> Now, the name of your rival?
            </h3>
            <input type="text" className={styles.inputRival} />
            <button>Submit</button>
          </form>
        )}

        {showTutorial && (
          <div className={styles.Tutorial}>
            <h1>Welcome {name}!!!</h1>
            <h3>How to use this app.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias autem neque natus ullam architecto corporis quisquam
              perferendis odio vitae necessitatibus!
            </p>
            <Link href="/pokedex">Go to pokedex</Link>
          </div>
        )}
      </div>
    </>
  );
}
