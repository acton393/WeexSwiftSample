//
//  WXMapComponent.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 08/02/2017.
//  Copyright © 2017 com.taobao.weex. All rights reserved.
//

import UIKit
import WeexSDK
import MapKit

class WXMapComponent: WXComponent, MKMapViewDelegate {
    var _geocide:CLGeocoder!;
    var _mapView:MKMapView!;
    
    override init(ref: String, type: String, styles: [AnyHashable : Any]?, attributes: [AnyHashable : Any]? = nil, events: [Any]?, weexInstance: WXSDKInstance) {
        super.init(ref: ref, type: type, styles: styles, attributes: attributes, events: events, weexInstance: weexInstance);
        //handle attributes
        //handle styles
    }
    
    override func loadView() -> UIView {
        return MKMapView.init()
    }
    
    override func viewDidLoad() {
        _mapView = self.view as! MKMapView;
        _mapView.showsUserLocation = true;
        
        if #available(iOS 9.0, *) {
            _mapView.showsScale = true
            _mapView.showsCompass = true;
            _mapView.showsTraffic = true;
        } else {
            // Fallback on earlier versions
        };
        _mapView.isZoomEnabled = true;
        _mapView.isScrollEnabled = true;
        _mapView.isRotateEnabled = true;
        _mapView.mapType = MKMapType.satellite
        _mapView.delegate = self;
    }
    
    func mapView(_ mapView: MKMapView, didUpdate userLocation: MKUserLocation) {
        self.geocide().reverseGeocodeLocation(userLocation.location!) { (placemarks:[CLPlacemark]?, eror : Error?) in
            let mark:CLPlacemark = (placemarks?.first)!
            userLocation.title = mark.name;
            userLocation.subtitle = mark.locality
        }
        let center:CLLocationCoordinate2D = (userLocation.location?.coordinate)!
        let span:MKCoordinateSpan = MKCoordinateSpanMake(0.009310,0.007812)
        let region:MKCoordinateRegion = MKCoordinateRegionMake(center, span)
        _mapView.setRegion(region, animated: true)
    }
    
    func geocide() -> CLGeocoder {
        if (_geocide == nil) {
            _geocide = CLGeocoder.init()
        }
        return _geocide
    }
    
}
