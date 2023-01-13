import styled from "styled-components";

const Container = styled.div`
background-color: var(--backColor);
.loading{
    background-color: var(--backColor);
    color: var(--black);
    border: 1px solid var(--black);
    padding: 3%;
    margin: 5% 30%;
    border-radius: 8px;
}
.loading h2{
    font-size: 20px;
}

main{
    width: 100%;
}

main h1, p{
    margin-top: 30px;
    text-align: center;
}
main p{
    margin: 10px 3%;
}

ul{
    width: 100%;
    text-align: center;
    list-style: none;
}
li{
    margin: 3% 20%;
    border: 1px solid var(--black);
    padding: 2%;
    border-radius: 8px;
}
h2{
    text-align: center;
}

button{
    margin: 10px 0;
    padding: 5px;
    background-color: transparent;
    color: var(--black);
    border: 1px solid var(--black);
    border-radius: 4px;
}

.about{
    display: flex;
    margin: 40px 40px 0 40px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--black);
    padding: 3% 0;
}

.about div{
    width: 100%;
    margin: 0 8%;
}

.title{
    text-align: center;
    width: 100%;
}

.me{
    margin-left: 20px;
    max-height: 250px;
    max-width: 250px;
    border-radius: 100%;
    border: 1px solid var(--black);
}

@media(max-width:600px){
    
.about{
    display: flex;
    flex-direction: column;
    margin: 40px 20px 40px 20px;
    align-items: center;
    border: 1px solid var(--black);
    padding: 3% 0;
}

.me{
    max-height: 200px;
    max-width: 200px;
    margin: 0 auto;
}

.about p{
    margin: 20px 5%;
}

}

`

export default Container