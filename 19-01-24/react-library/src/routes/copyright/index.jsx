import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function Copyrigth() {
  return (
    <>
      <div className={styles.Copyright}>
        <button>
          <Link to={"/"}>Go to Home</Link>
        </button>
        <h1>Copyright © 2077 Cyberpunk</h1>
        <p>
          All rights reserved. No part of this publication may be reproduced,
          distributed, or transmitted in any form or by any means, including
          photocopying, recording, or other electronic or mechanical methods,
          without the prior written permission of the publisher, except in the
          case of brief quotations embodied in critical reviews and certain
          other noncommercial uses permitted by copyright law.
        </p>
        <p>
          For permissions requests, write to the publisher at the address below:
        </p>
        <ul>
          <li>Cyberpunk</li>
          <li>Via del Nulla</li>
          <li>Night City</li>
          <li>V@cyber.com</li>
          <li>1 320 7200 654</li>
        </ul>
        <p>www.cyber.com</p>
        <p>
          This book is a work of fiction [or nonfiction]. Names, characters,
          places, and incidents either are products of the author’s imagination
          or are used fictitiously. Any resemblance to actual events or locales
          or persons, living or dead, is entirely coincidental.
        </p>
      </div>
    </>
  );
}
