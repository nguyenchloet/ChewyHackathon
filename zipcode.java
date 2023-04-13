import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Zipcode {

    private static void getZipCodes(String zipCode) throws IOException{
        String apiKey = "DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm";
        String distance;
        String api = "https://www.zipcodeapi.com/rest/" + apiKey + "/radius.json/" + zipCode + "/" + distance + "/" + "mile";

        URL url = new URL("api");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();
        
        InputStream inputStream = conn.getInputStream();
        InputStreamReader inputStreamReader = new InputStreamReader(InputStream);


        JsonElement JsonElement = JsonParser.parseReader(inputStreamReader);
        JsonObject jsonObject = jsonElement.getAsJsonObject();
        JsonArray zipCodes = jsonObject.getasJsonArray("zip_codes")

        List<String> zipCodeList = new ArrayList<>();

        for (JsonElement zipCode : zipCodes) {
             String code = zipCode.getAsJsonObject().get("zip_code").getAsString();
            zipCodeList.add(code);
        }

        String[] zipCodeArray = zipCodeList.toArray(new String[0]); 

        }           

        System.out.println(zips);
    
    public static void main (String args[]) throws IOException {
        getZipCodes("01221");
    } 
}
