package kr.re.ec.android.tastynote;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /** TEMP: must be public */
    public void onShowCalendarClicked(View view) {
        Log.d(TAG, "onShowCalendarClicked clicked");
        Intent intent = new Intent(this, GoogleCalendarSampleActivity.class);
        startActivity(intent);

    }

    public void onShowDriveClicked(View view) {
        Log.d(TAG, "onShowDriveClicked clicked");
        Intent intent = new Intent(this, GoogleDriveSampleActivity.class);
        startActivity(intent);

    }
}
