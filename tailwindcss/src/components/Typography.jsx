import React from "react";

const Typography = () => {
  return (
    <div>
      {/* //*Thypography */}
      <p className="text-sm">Thypography</p>
      <p className="text-base/8">Thypography</p>
      <p className="text-lg">Thypography</p>
      <p className="text-xl">Thypography</p>
      <p className="text-2xl">Thypography</p>
      <h1 className="text-4xl">Typography</h1>
      <h2 className="text-3xl">Typography</h2>
      <h3 className="text-[60px]">Typography</h3>
      <h3 className="text-[4rem]">Typography</h3>

      {/* //*Line Clamp */}
      <article>
        <p className="line-clamp-3">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati mollitia, cum reiciendis fugit tenetur laboriosam recusandae distinctio sapiente! Dicta commodi, minima doloribus ducimus nobis fugiat quidem. Labore recusandae placeat a ratione, ullam odio vero quaerat corporis reprehenderit quasi! Iure dolor reprehenderit corrupti rerum iste blanditiis. Debitis excepturi aliquam architecto error provident repellendus earum odio quis modi, ad hic et voluptate magnam dolore exercitationem quam! Voluptates eaque odit voluptatem numquam omnis est laborum obcaecati, nihil aspernatur similique fugit atque ullam rem officiis minima expedita vitae repellat tempore dolor earum voluptatum nisi. Quod consequatur beatae suscipit praesentium aut odio nesciunt ut?
        </p>
      </article>
      <div className="font-bold">
      <p className="font-bold">Merhaba</p>
      <p className="text-center">Merhaba</p>
      <p className="underline">Merhaba</p>
      <p className="line-through">Merhaba</p>
      <p className="uppercase">Merhaba</p>
      <p className="lowercase">Merhaba</p>
      <p className="text-red-400">Merhaba</p>
      <p className="text-red-950">Merhaba</p>
      <p className="text-[#d24154]">Merhaba</p>
      <p className="text-[rgb(33,65,65)]">Merhaba</p>
      <p className="bg-slate-500">Merhaba</p>
      </div>
      
    </div>
  );
};

export default Typography;
