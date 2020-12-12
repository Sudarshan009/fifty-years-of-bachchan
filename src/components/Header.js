import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Header = () => {
    return (
        <div className="headerDiv">
           <h1 className="mainTitle">50 Years of Bachchan, 50 Memorable Scenes</h1>

           <Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
            
            <p className="headerPara">Fifty years ago, a lanky, deep-voiced actor burst onto the screens in a little-seen film named Saat Hindustani. Fifty years later, Hindi cinema seems unimaginable without him. He was the hugest of stars, whose flops reportedly made more money than others’ hits. He was also a great actor, who could go through the gamut. From the gestural to the theatrical, from the internalised to the starry, from the roar to the whisper, from cross-dressing and co-s­­­tarring with a cockroach to narrating a Satyajit Ray epic, he has done it all. His name, of course, is Amitabh Bachchan, and in this article Film Companion recalls 50 of his most memorable scenes.</p>
        </div>
    )
}
