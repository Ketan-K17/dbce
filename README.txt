FOLLOWING COMMANDS IN CMD AFTER HAVING MADE .net.xml from netedit:

C:\Users\russe\Downloads\manhatten\project\twolanesignal>randomTrips.py -n intersection.net.xml -e 1000 -o intersection.trips.xml

C:\Users\russe\Downloads\manhatten\project\twolanesignal>python randomTrips.py -n intersection.net.xml -o intersection.trips.xml --begin 0 --end 1000

C:\Users\russe\Downloads\manhatten\project\twolanesignal>duarouter -n intersection.net.xml --route-files intersection.trips.xml -o intersection.rou.xml --ignore-errors
Success.up to time step: 1000.00


OPEN SUMO-GUI > OPEN FILE > SELECT intersection.sumo.cfg



IGNORE THIS
C:\Users\russe\Downloads\manhatten\project\twolanesignal>dir
 Volume in drive C has no label.
 Volume Serial Number is 481F-E64B

 Directory of C:\Users\russe\Downloads\manhatten\project\twolanesignal

10/10/2024  12:57 PM    <DIR>          .
10/10/2024  12:49 PM    <DIR>          ..
10/10/2024  12:49 PM            42,024 intersection.net.xml
10/10/2024  12:55 PM           208,289 intersection.rou.alt.xml
10/10/2024  12:55 PM            98,328 intersection.rou.xml
10/10/2024  12:56 PM               389 intersection.sumo.cfg
10/10/2024  12:54 PM            57,673 intersection.trips.xml
10/10/2024  12:54 PM            47,081 randomTrips.py
               6 File(s)        453,784 bytes
               2 Dir(s)  766,227,025,920 bytes free
