import OpenAI from "openai";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [userChatReq, setUserChatReq] = useState("");
  const [userImageReq, setUserImageReq] = useState("");
  const [inputValue, setInputValue] = useState("");

  // const onHandleChatGPT3 = async (e) => {
  //   e.preventDefault();

  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-3.5-turbo-1106",
  //     messages: [{ "role": "system", "content": inputValue }]
  //   })

  //   setUserChatReq(completion.choices[0].message.content);
  //   setInputValue("");
  // }

  const onHandleDalle2 = async (e) => {
    e.preventDefault();

    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: inputValue,
      size: "1024x1024",
    });

    setUserImageReq(image.data[0].url);
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  return (
    <div className={styles.wrapper}>
      {/* <ul className={styles.list}>
        {userChatReq ? (
          userChatReq.split("\n").map((item) => <li key={item}>{item}</li>)
        ) : (
          <p>Sto caricando la risposta ...</p>
        )}
      </ul> */}
      <h2 className={styles.title}>
        Type what you want to be rendered. Anything you want.
      </h2>
      <form className={styles.searchForm} onSubmit={onHandleDalle2}>
        <input
          className={styles.textBar}
          type="text"
          value={inputValue}
          onChange={onHandleInputValue}
        />
        <input className={styles.searchButton} type="submit" value="Search" />
      </form>
      {userImageReq ? (
        <img className={styles.image} src={userImageReq} alt={inputValue} />
      ) : (
        <p className={styles.paragraph}>
          After submitting, you will just need to wait! Waiting time is less
          than a minute!
        </p>
      )}
    </div>
  );
}
