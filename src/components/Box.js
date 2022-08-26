import { useState } from "react";

function Box(props) {

    const [count, updateCount] = useState(0);

    function click () {
      props.boxClicked(props.id);
      updateCount (count + 1);
    }

    return (
      <div onClick={() => click()}>
        <div class="text">
          <p id="box">Box {props.id}</p>
          <p id="contador">Contador Hijo {count}</p>
          <p id="Diferencia" >Diferencia con mi hermano: {count - props.brotherCount}</p>
          <p></p>
        </div>
      </div>
    );

}

export default Box;