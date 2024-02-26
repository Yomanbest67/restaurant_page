function home() {
    const element = document.createElement('div');
    const body = document.createElement('div');
    const body2 = document.createElement('div');

    element.classList.add('home');
    body.classList.add('homeText');
    body2.classList.add('homeText');

    element.innerHTML = "The best restaurant on the coast!";

    body.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat dapibus dui at rhoncus. Maecenas eu dictum ligula. Maecenas tincidunt varius sem, mollis pretium libero pellentesque nec. Nam et iaculis nisi. Donec mi nibh, laoreet non nunc at, rutrum condimentum ligula. Integer vitae aliquet nunc. Vestibulum lacinia orci ut tempus pellentesque. Integer ac dolor sit amet velit finibus finibus. Aenean malesuada arcu dapibus purus tempor luctus laoreet id purus. Nulla at posuere lectus, a varius sem."

    body2.textContent = "Aliquam imperdiet finibus tortor et pellentesque. Aenean at sem at nunc euismod malesuada nec et est. Pellentesque iaculis varius lacus sed tristique. Nullam mattis leo suscipit nibh ultrices, nec commodo dui rhoncus. Phasellus porttitor auctor quam, sed tempus neque consequat quis. Aenean tincidunt sodales est, at tincidunt justo. Nulla cursus, tellus eu pharetra mattis, risus justo aliquam ante, sit amet commodo nisl magna eget elit. In molestie, ante eu bibendum convallis, diam eros commodo dui, eu consequat erat purus eu sapien. Suspendisse ultrices, risus id tempus dictum, est neque eleifend lectus, et sollicitudin diam lacus eu urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel lectus laoreet, maximus quam non, consectetur justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut mattis volutpat sem et dictum. Aenean ut urna sodales, tincidunt urna gravida, ornare libero.";

    
    element.appendChild(body);
    element.appendChild(body2);
    return element;
}

export default home