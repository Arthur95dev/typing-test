function resize() {
    let root = document.getElementById('root');

    if (root.clientWidth < 768) {
        
        let typingTestContainer = document.querySelector('.typing-test_container');
        
        let p = typingTestContainer.querySelector('.text-area');
        let pHeight = p.clientHeight;
        let textAreaContainer = document.querySelector('.text-area_container');

        textAreaContainer.style.height = `${pHeight + 20}px`;
    }
}

export default resize;