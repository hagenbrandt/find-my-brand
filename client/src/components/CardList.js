import styled from 'styled-components'

export default function CardList({list, layout}) {
    console.log(layout === 'list');
    return(
    <List>
        <ul className={layout === 'list' ? 'list' : ''}>
        {list.map(item => {
            return (
            <ListItem>
                <div className={layout === 'list' ? 'card' : 'card -transform'}>
                    <div className="front-side">
                        <img className="image" src={`${item.url}`}/>
                    </div>
                    <div className="back-side">
                        <ul className="back-side-list">
                            <li className="list-item">All Phases</li>
                            <li className="list-item">Monitoring</li>
                            <li className="list-item">Amazon Cases</li>
                            <li className="list-item"><button type="button" className="btn -primary">Dashboard</button></li>
                            <li className="list-item"><button type="button" className="btn -secondary">Product Catalog</button></li>
                        </ul>
                    </div>
                </div>
            </ListItem>
            )
        })}
    </ul>
    </List>

    )
}

const List = styled.section`
    padding: 0 2rem 0 0;

    ul {
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 2rem;
        grid-area: content;
        padding: 2rem 2rem 300px;
    }
    .list {
        grid-template-columns: 1fr;
    }

    .list .front-side {
        display: grid;
        justify-content: start;
    }

    .list .image {
        width: auto;
        height: 100%;
    }
`

const ListItem = styled.li`
    list-style: none;
    width: 100%;
    height: 18vw;
    cursor: pointer;
    background-color: transparent;
    perspective: 1000px;

    &:hover .card.-transform {
        transform: rotateY(180deg);
    }

    .card {
        position: relative;
        width: 100%;
        height: 100%;
        list-style: none;
        text-align: center;
        transition: transform .8s;
        transform-style: preserve-3d;
    }

    .image {
        width: 100%;
        height: auto;
        margin: auto;
    }

    .front-side, .back-side {
        position: absolute;
        display: grid;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #fff;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    .front-side {
        padding: 60px;
        border: #E6EAEE;
        border-radius: 4px;
        box-shadow: 2px 8px 12px rgba(232, 236, 240, 0.5);
    }

    .back-side {
        display: flex;
        flex-direction: column;
        transform: rotateY(180deg);
        cursor: default;
        padding: 0;
        gap: 0;

        .back-side-list {
            position: relative;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            gap: 0;
            padding: 0;
            
            .list-item, .btn {
                cursor: pointer;
            }

            .list-item {
                color: #28354A;
                width: 100%;

                &:hover {
                    color: #E9812C;
                }

                .btn {
                    outline: none;
                    border: none;

                    &.-primary {
                        background: #E9812C;
                        color: #fff;
                        padding: 0.8rem 0;
                        width: 90%;
                        border-radius: 20px;
                    }

                    &.-secondary {
                        background: transparent;
                        border: 1px solid  #E4E6ED;
                        padding: 0.8rem 0;
                        width: 70%;
                        border-radius: 20px;
                    }
                }
            }
        }
    }
`