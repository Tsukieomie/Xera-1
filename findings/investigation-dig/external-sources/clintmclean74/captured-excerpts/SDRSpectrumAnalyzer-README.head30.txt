RTL SDR Spectrum Analyzer for Detection of Reradiated and Emitted Radio and Microwave Energy from Humans
--------------------------------------------------------------------------------------------------------

User Guide
----------

Here's the user guide described here with images:

https://drive.google.com/open?id=1Sc6_Tbxux-O5aAFY-gAXCkrgMpNiRkjv&fbclid=IwAR2ktx2dDmgUX8CeoNUnBmmzYwdr6OMHwQbpX10gseqPXcWQTDCFnjCIk3k


Reradiated or emitted radio or microwave energy can be detected based on the fact that there should be an increase in signal strength when you're near the antenna.

You should place the antenna for the rtl sdr on your desk, near your computer or if you're using a yagi antenna, it should be pointing to where you work at your computer and it should preferably be reasonably near.

The rtl sdr spectrum analyzer then determines when your near your computer based on keyboard and mouse input.

If a signal often increases in strength when your near the computer, and so also near the antenna, it could be because it's being reradiated or emitted from you.

So this is how it determines that a signal increased in strength if it's from you.

However, signals also change in signal strength themselves, because they're used for transmitting information and they do that using changes in signal strength.

So to determine whether a signal is changing in signal strength because of you, this code system averages the signal strength over a longer duration, since this varies less.

So the noise is reduced after averaging, showing signals that are essentially or almost hidden in the noise.

Where there's a signal that seems to be stronger when you're near, it will be detected as an interesting signal.

Based on how often signals are detected as an interesting signal, they will also be placed in a leaderboard list of signals.
