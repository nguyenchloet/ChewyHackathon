

import javax.print.DocFlavor.URL;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Zipcode {

    public static String stream(URL url) {

        String apiKey = "DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm";
        String distance;
        String api = "https://www.zipcodeapi.com/rest/" + apiKey + "/radius.json/" + zipCode + "/" + distance + "/" + "mile";

        try (InputStream input = url.openStream(api)) {
            InputStreamReader isr = new InputStreamReader(input);
            BufferedReader reader = new BufferedReader(isr);
            StringBuilder json = new StringBuilder();
            int c;
            while ((c = reader.read()) != -1) {
                json.append((char) c);
            }
            return json.toString();
        }
    }
    String apiKey = "DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm";
    String distance;
    String api = "https://www.zipcodeapi.com/rest/" + apiKey + "/radius.json/" + zipCode + "/" + distance + "/" + "mile";

    URL url = new URL("api");

    public static String stream(URL url) {
        try (InputStream input = url.openStream()) {
            InputStreamReader isr = new InputStreamReader(input);
            BufferedReader reader = new BufferedReader(isr);
            StringBuilder json = new StringBuilder();
            int c;
            while ((c = reader.read()) != -1) {
                json.append((char) c);
            }
            return json.toString();
        }
    }

    // private static void getZipCodes(String zipCode) throws IOException{
    //     String apiKey = "DemoOnly00zTU3R15kUfDWOw8o0haOVmTlwAdcMLbsBvDPVVlLvdlPo2lyz9pwBm";
    //     String distance;
    //     String api = "https://www.zipcodeapi.com/rest/" + apiKey + "/radius.json/" + zipCode + "/" + distance + "/" + "mile";

    //     URL url = new URL("api");


        // HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        // conn.setRequestMethod("GET");
        // conn.connect();

        // InputStream inputStream = conn.getInputStream();
        // InputStreamReader inputStreamReader = new InputStreamReader(InputStream);


        // JsonElement JsonElement = JsonParser.parseReader(inputStreamReader);
        // JsonObject jsonObject = jsonElement.getAsJsonObject();
        // JsonArray zipCodes = jsonObject.getasJsonArray("zip_codes")

        // List<String> zipCodeList = new ArrayList<>();

        // for (JsonElement zipCode : zipCodes) {
        //      String code = zipCode.getAsJsonObject().get("zip_code").getAsString();
        //     zipCodeList.add(code);
        // }

        // String[] zipCodeArray = zipCodeList.toArray(new String[0]);

        // }

        // System.out.println(zips);

    public static void main (String args[]) throws IOException {
        getZipCodes("01221");
    }
}
