//
//  AppDelegate.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 6/18/16.
//  Copyright © 2016 com.taobao.weex. All rights reserved.
//

import UIKit
import WeexSDK

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        //for your business, not necessary
        WXAppConfiguration.setAppGroup("SwiftWeexSample")
        WXAppConfiguration.setAppName("SwiftWeexSample")
        WXAppConfiguration.setAppVersion("1.0.0")
        
        WXLog.setLogLevel(WXLogLevel.all)
        
        // register event module
        WXSDKEngine.registerModule("event", with: NSClassFromString("WXEventModule"))
        
        // register extra component
        WXSDKEngine.registerComponent("divExtra", with: NSClassFromString("WXDivExtraComponent"));
        // register handler
        WXSDKEngine.registerHandler(WXImageLoaderDefaultImplement(), with:NSProtocolFromString("WXImgLoaderProtocol"))
        
        //init WeexSDK
        WXSDKEngine.initSDKEnvironment()
        
        WXSDKEngine.registerComponent("map", with: WXMapComponent.self)
        
        let viewController:ViewController = ViewController()
        viewController.url = URL.init(string: String.init(format: "file://%@/bundlejs/index.js", Bundle.main.bundlePath))
        window = UIWindow.init(frame: UIScreen.main.bounds)
        window?.backgroundColor = UIColor.white
        window?.rootViewController = UINavigationController.init(rootViewController: viewController)
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }


}

