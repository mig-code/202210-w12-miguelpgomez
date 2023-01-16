import React from 'react';
import { CharacterOption } from '../../data/characters.data';

export default function Item({ item }: { item: CharacterOption }) {
    return (
        <div className="card character__card">
            <img
                src={item.img}
                alt={item.char_name}
                className={
                    item.isAlive
                        ? 'character__picture card-img-top'
                        : 'character__picture card-img-top character__picture--death'
                }
            />
            <div className="card-body">
                <h2 className="character__name card-title h4">
                    {item.char_name} {item.char_fam}
                </h2>
                <div className="character__info">
                    <ul className="list-unstyled">
                        <li>Edad: {item.char_age} años</li>
                        <li>
                            Estado:
                            {item.isAlive ? (
                                <i className="fas fa-thumbs-up"></i>
                            ) : (
                                <i className="fas fa-thumbs-down"></i>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="character__overlay">
                    <ul className="list-unstyled">
                        {item.regnalYears && (
                            <li>Años de reinado: {item.regnalYears}</li>
                        )}
                        {(item.weapon && item.skill) && (
                            <>
                                <li>Arma: {item.weapon} </li>
                                <li>Destreza: {item.skill}</li>
                            </>
                        )}
                        {item.advises && (
                            <li>Asesora a: {item.advises.char_name}</li>
                        )}

                        {item.serve && (
                            <>
                                <li>Sirve a: {item.serve.char_name}</li>
                                <li>Peloteo: {item.fidelity}</li>
                            </>
                        )}
                    </ul>
                    <div className="character__actions">
                        {item.isAlive && (
                            <button className="character__action character__action--death btn">
                                Muere
                            </button>
                        )}

                        {item.isAlive && (
                            <button className="character__action character__action--speak btn">
                                Habla
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <i className="emoji">{item.emoji}</i>
        </div>
    );
}
