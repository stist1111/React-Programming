function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        {onClick: () => setLiked(!liked)},
        text,
    );
}

const domContainer = document.querySelector('#react-root'); //simple1.html 파일에 미리 만들어 뒀던 돔 요소 가져오기
ReactDOM.render(React.createElement(LikeButton), domContainer) //ReactDOM 변수를 사용해서 우리가 만든 컴포넌트를 react-root 돔 요소에 붙인다.