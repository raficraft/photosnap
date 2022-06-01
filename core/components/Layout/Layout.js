import React from "react";
import Checkbox from "../btn/Checkbox/Checkbox";

export default function Layout() {
  return (
    <div>
      <h1>DM Sans Bold H1</h1>
      <h2>DM Sans Bold H2</h2>
      <h3>DM Sans Bold H3</h3>
      <h4>DM Sans Bold H4</h4>
      <h5>DM Sans Bold H5</h5>

      <p className="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nun.
      </p>

      <button className="button button_dark">button 1</button>
      <button className="button button_arrow">
        button 2<span className="arrow"></span>
      </button>
      <Checkbox></Checkbox>
    </div>
  );
}
